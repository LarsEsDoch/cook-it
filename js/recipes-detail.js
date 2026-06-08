const recipeDetail = document.getElementById("recipe-detail");

const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const recipe = recipes.find((item) => item.id === recipeId);

function renderLabels(labels) {
    if (!labels || labels.length === 0) {
        return "";
    }

    return `
        <div class="recipe-labels">
            ${labels.map((label) => `<span class="recipe-label">${label}</span>`).join("")}
        </div>
    `;
}

function renderNutrition(nutrition) {
    if (!nutrition) {
        return "";
    }

    const nutritionItems = [
        { label: "Calories", value: nutrition.calories, unit: "kcal" },
        { label: "Protein", value: nutrition.protein, unit: "g" },
        { label: "Carbs", value: nutrition.carbs, unit: "g" },
        { label: "Fat", value: nutrition.fat, unit: "g" },
        { label: "Fiber", value: nutrition.fiber, unit: "g" }
    ].filter((item) => item.value !== undefined && item.value !== null && item.value !== "");

    if (nutritionItems.length === 0) {
        return "";
    }

    return `
        <section class="recipe-info-section">
            <h2>Nutrition facts</h2>
            <div class="nutrition-detail-grid">
                ${nutritionItems.map((item) => `
                    <div class="nutrition-detail-card">
                        <span>${item.label}</span>
                        <strong>${item.value} ${item.unit}</strong>
                    </div>
                `).join("")}
            </div>
        </section>
    `;
}

function renderGeneralNotes(generalNotes) {
    if (!generalNotes) {
        return "";
    }

    return `
        <section class="recipe-info-section">
            <h2>General notes</h2>
            <p class="general-notes">${generalNotes}</p>
        </section>
    `;
}

function renderUtensils(utensils) {
    if (!utensils || utensils.length === 0) {
        return "";
    }

    return `
        <section class="recipe-info-section">
            <h2>Utensils</h2>
            <ul>
                ${utensils.map((utensil) => `<li>${utensil}</li>`).join("")}
            </ul>
        </section>
    `;
}

function renderIngredients(ingredients) {
    if (!ingredients || ingredients.length === 0) {
        return "";
    }

    return `
        <section class="recipe-info-section">
            <h2>Ingredients</h2>
            <ul>
                ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
            </ul>
        </section>
    `;
}

function renderPreparationSteps(steps) {
    if (!steps || steps.length === 0) {
        return "";
    }

    return `
        <section class="recipe-info-section">
            <h2>Preparation</h2>
            <ol class="preparation-step-list">
                ${steps.map((step) => {
        const stepText = typeof step === "string" ? step : step.text;
        const stepImage = typeof step === "string" ? "" : step.image;

        return `
                        <li class="preparation-step-item">
                            <p>${stepText}</p>
                            ${
            stepImage
                ? `<img src="${stepImage}" alt="Preparation step image" class="preparation-step-image">`
                : ""
        }
                        </li>
                    `;
    }).join("")}
            </ol>
        </section>
    `;
}

if (recipeDetail && recipe) {
    document.title = `Cook it - ${recipe.title}`;

    recipeDetail.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">

        <h1>${recipe.title}</h1>
        <p>${recipe.description}</p>

        ${renderLabels(recipe.labels)}

        <div class="recipe-meta">
            <span>Time: ${recipe.time}</span>
            <span>Difficulty: ${recipe.difficulty}</span>
            <span>Servings: ${recipe.servings}</span>
        </div>

        ${
        recipe.author && recipe.createdAt
            ? `<p class="recipe-author">Added by ${recipe.author} on ${recipe.createdAt}</p>`
            : ""
    }

        ${renderNutrition(recipe.nutrition)}
        ${renderGeneralNotes(recipe.generalNotes)}
        ${renderIngredients(recipe.ingredients)}
        ${renderUtensils(recipe.utensils)}
        ${renderPreparationSteps(recipe.steps)}
    `;
} else if (recipeDetail) {
    recipeDetail.innerHTML = `
        <h1>Recipe not found</h1>
        <p>The recipe you are looking for does not exist.</p>
        <a href="recipes.html" class="btn">Back to recipes</a>
    `;
}