const recipeDetail = document.getElementById("recipe-detail");

const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const recipe = recipes.find((item) => item.id === recipeId);

if (recipeDetail && recipe) {
    recipeDetail.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">

            <h1>${recipe.title}</h1>
            <p>${recipe.description}</p>

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

            <h2>Ingredients</h2>
            <ul>
                ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
            </ul>

            <h2>Preparation</h2>
            <ol>
                ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
            </ol>
        `;
} else if (recipeDetail) {
    recipeDetail.innerHTML = `
        <h1>Recipe not found</h1>
        <p>The recipe you are looking for does not exist.</p>
        <a href="recipes.html" class="btn">Back to recipes</a>
    `;
}