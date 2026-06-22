const addRecipeForm = document.getElementById("add-recipe-form");
const cancelRecipeButton = document.getElementById("cancel-recipe-btn");

const addIngredientButton = document.getElementById("add-ingredient-btn");
const addUtensilButton = document.getElementById("add-utensil-btn");
const addStepButton = document.getElementById("add-step-btn");

const ingredientsList = document.getElementById("ingredients-list");
const utensilsList = document.getElementById("utensils-list");
const stepsList = document.getElementById("steps-list");

let recipeWasSaved = false;

function renderCategoryCheckboxes() {
    const container = document.getElementById("category-checkboxes");
    if (!container || typeof categories === "undefined") return;

    const groups = {};
    categories.forEach(cat => {
        if (!groups[cat.group]) {
            groups[cat.group] = { label: cat.groupLabel, items: [] };
        }
        groups[cat.group].items.push(cat);
    });

    container.innerHTML = Object.entries(groups).map(([groupId, group], index) => `
        <details class="category-group-select" ${index === 0 ? "open" : ""}>
            <summary class="category-group-summary">${group.label}</summary>
            <div class="category-chip-grid">
                ${group.items.map(cat => `
                    <label class="category-chip-label">
                        <input type="checkbox" name="recipe-categories" value="${cat.id}" class="category-chip-input">
                        <span class="category-chip-pill">${cat.icon} ${cat.title}</span>
                    </label>
                `).join("")}
            </div>
        </details>
    `).join("");

    container.querySelectorAll(".category-chip-input").forEach(input => {
        input.addEventListener("change", () => {
            input.nextElementSibling.classList.toggle("active", input.checked);
        });
    });
}

function createDynamicField(inputClass, placeholder, required = false) {
    const row = document.createElement("div");
    row.classList.add("dynamic-field-row");

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add(inputClass);
    input.placeholder = placeholder;
    input.required = required;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("remove-field-btn");
    removeButton.textContent = "Delete";

    removeButton.addEventListener("click", () => {
        row.remove();
    });

    row.append(input, removeButton);

    return row;
}

function createStepField() {
    const row = document.createElement("div");
    row.classList.add("dynamic-step-row");

    const stepInput = document.createElement("input");
    stepInput.type = "text";
    stepInput.classList.add("step-input");
    stepInput.required = true;
    stepInput.placeholder = "e.g. Boil the pasta.";

    const imageInput = document.createElement("input");
    imageInput.type = "file";
    imageInput.classList.add("step-image-input");
    imageInput.accept = "image/*";

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("remove-field-btn");
    removeButton.textContent = "Delete";

    removeButton.addEventListener("click", () => {
        row.remove();
    });

    row.append(stepInput, imageInput, removeButton);

    return row;
}

function getInputValues(selector) {
    return Array.from(document.querySelectorAll(selector))
        .map((input) => input.value.trim())
        .filter((value) => value !== "");
}

function getCheckedLabels() {
    return Array.from(document.querySelectorAll('input[name="recipe-labels"]:checked'))
        .map((checkbox) => checkbox.value);
}

function getCheckedCategories() {
    return Array.from(document.querySelectorAll('input[name="recipe-categories"]:checked'))
        .map((checkbox) => checkbox.value);
}

function fileToBase64(file) {
    return new Promise((resolve) => {
        if (!file) {
            resolve("");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.readAsDataURL(file);
    });
}

async function getPreparationSteps() {
    const stepRows = Array.from(document.querySelectorAll(".dynamic-step-row"));

    const steps = await Promise.all(
        stepRows.map(async (row) => {
            const text = row.querySelector(".step-input").value.trim();
            const imageFile = row.querySelector(".step-image-input").files[0];
            const image = await fileToBase64(imageFile);

            return {
                text,
                image
            };
        })
    );

    return steps.filter((step) => step.text !== "");
}

function hasUnsavedChanges() {
    if (!addRecipeForm) {
        return false;
    }

    return Array.from(addRecipeForm.elements).some((element) => {
        const isEditableField = element.matches("input, textarea, select");
        const isCheckbox = element.type === "checkbox";
        const isFileInput = element.type === "file";

        if (isCheckbox) {
            return element.checked;
        }

        if (isFileInput) {
            return element.files.length > 0;
        }

        return isEditableField && element.value.trim() !== "";
    });
}

function confirmLeavingPage() {
    if (!recipeWasSaved && hasUnsavedChanges()) {
        return confirm("Are you sure you want to cancel? Your entered recipe will be lost.");
    }

    return true;
}

renderCategoryCheckboxes();

if (addIngredientButton) {
    addIngredientButton.addEventListener("click", () => {
        ingredientsList.append(createDynamicField("ingredient-input", "e.g. 200g pasta", true));
    });
}

if (addUtensilButton) {
    addUtensilButton.addEventListener("click", () => {
        utensilsList.append(createDynamicField("utensil-input", "e.g. frying pan"));
    });
}

if (addStepButton) {
    addStepButton.addEventListener("click", () => {
        stepsList.append(createStepField());
    });
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-field-btn")) {
        const row = event.target.closest(".dynamic-field-row, .dynamic-step-row");
        const list = event.target.closest(".dynamic-field-list");

        if (list.children.length > 1) {
            row.remove();
            return;
        }

        const inputs = row.querySelectorAll("input");

        inputs.forEach((input) => {
            input.value = "";
        });
    }
});

if (cancelRecipeButton) {
    cancelRecipeButton.addEventListener("click", () => {
        if (confirmLeavingPage()) {
            window.location.href = "recipes.html";
        }
    });
}

window.addEventListener("beforeunload", (event) => {
    if (!recipeWasSaved && hasUnsavedChanges()) {
        event.preventDefault();
        event.returnValue = "";
    }
});

if (addRecipeForm) {
    addRecipeForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const author = document.getElementById("author").value.trim();
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const recipeImageFile = document.getElementById("recipe-image").files[0];
        const recipeImage = await fileToBase64(recipeImageFile);
        const time = document.getElementById("time").value.trim();
        const difficulty = document.getElementById("difficulty").value;
        const servings = Number(document.getElementById("servings").value);

        const calories = Number(document.getElementById("calories").value) || 0;
        const protein = Number(document.getElementById("protein").value) || 0;
        const carbs = Number(document.getElementById("carbs").value) || 0;
        const fat = Number(document.getElementById("fat").value) || 0;
        const fiber = Number(document.getElementById("fiber").value) || 0;

        const nutrition = {
            calories,
            protein,
            carbs,
            fat,
            fiber
        };

        const recipeCategories = getCheckedCategories();
        const labels = getCheckedLabels();
        const generalNotes = document.getElementById("general-notes").value.trim();

        const ingredients = getInputValues(".ingredient-input");
        const utensils = getInputValues(".utensil-input");
        const steps = await getPreparationSteps();

        const createdAt = new Date().toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short"
        });

        const recipe = {
            id: `${title.toLowerCase().replaceAll(" ", "-")}-${Date.now()}`,
            title,
            description,
            image: recipeImage || "img/recipe.png",
            time,
            difficulty,
            servings,
            nutrition,
            categories: recipeCategories,
            labels,
            generalNotes,
            ingredients,
            utensils,
            steps,
            author,
            createdAt,
            isUserRecipe: true,
            rating: {
                average: 0,
                count: 0
            }
        };

        const savedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
        savedRecipes.push(recipe);

        localStorage.setItem("userRecipes", JSON.stringify(savedRecipes));

        recipeWasSaved = true;
        window.location.href = "recipes.html";
    });
}