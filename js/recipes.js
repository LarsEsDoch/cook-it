const recipesList = document.getElementById("recipes-list");

if (recipesList) {
    const userRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
    const allRecipes = [...recipes, ...userRecipes];

    allRecipes.forEach((recipe) => {
        const recipeCard = document.createElement("article");
        recipeCard.classList.add("recipe-card");

        const userRecipeBadge = recipe.isUserRecipe
            ? `<span class="user-recipe-badge">${recipe.author ? `Added by ${recipe.author}` : "User made"}</span>`
            : "";

        recipeCard.innerHTML = `
            ${userRecipeBadge}
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-card-content">
                <h2>${recipe.title}</h2>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span>${recipe.time}</span>
                    <span>${recipe.difficulty}</span>
                </div>
                <a href="recipe-detail.html?id=${recipe.id}" class="btn">View recipe</a>
            </div>
        `;

        recipesList.appendChild(recipeCard);
    });
}