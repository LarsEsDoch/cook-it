const addRecipeForm = document.getElementById("add-recipe-form");
const cancelRecipeButton = document.getElementById("cancel-recipe-btn");

const addIngredientButton = document.getElementById("add-ingredient-btn");
const addUtensilButton = document.getElementById("add-utensil-btn");
const addStepButton = document.getElementById("add-step-btn");

const ingredientsList = document.getElementById("ingredients-list");
const utensilsList = document.getElementById("utensils-list");
const stepsList = document.getElementById("steps-list");

let recipeWasSaved = false;

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

function getInputValues(selector) {
    return Array.from(document.querySelectorAll(selector))
        .map((input) => input.value.trim())
        .filter((value) => value !== "");
}

function hasUnsavedChanges() {
    if (!addRecipeForm) {
        return false;
    }

    return Array.from(addRecipeForm.elements).some((element) => {
        const isEditableField = element.matches("input, textarea, select");
        return isEditableField && element.value.trim() !== "";
    });
}

function confirmLeavingPage() {
    if (!recipeWasSaved && hasUnsavedChanges()) {
        return confirm("Are you sure you want to cancel? Your entered recipe will be lost.");
    }

    return true;
}

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
        stepsList.append(createDynamicField("step-input", "e.g. Boil the pasta.", true));
    });
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-field-btn")) {
        const row = event.target.closest(".dynamic-field-row");
        const list = event.target.closest(".dynamic-field-list");

        if (list.children.length > 1) {
            row.remove();
        } else {
            const input = row.querySelector("input");
            input.value = "";
        }
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
    addRecipeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const author = document.getElementById("author").value.trim();
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const time = document.getElementById("time").value.trim();
        const difficulty = document.getElementById("difficulty").value;
        const servings = Number(document.getElementById("servings").value);

        const ingredients = getInputValues(".ingredient-input");
        const utensils = getInputValues(".utensil-input");
        const steps = getInputValues(".step-input");

        const createdAt = new Date().toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short"
        });

        const recipe = {
            id: `${title.toLowerCase().replaceAll(" ", "-")}-${Date.now()}`,
            title,
            description,
            image: "recipe.png",
            time,
            difficulty,
            servings,
            ingredients,
            utensils,
            steps,
            author,
            createdAt,
            isUserRecipe: true
        };

        const savedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
        savedRecipes.push(recipe);

        localStorage.setItem("userRecipes", JSON.stringify(savedRecipes));

        recipeWasSaved = true;
        window.location.href = "recipes.html";
    });
}