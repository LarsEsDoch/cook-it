function getFavorites() {
    return JSON.parse(localStorage.getItem("recipeFavorites")) || [];
}

function isFavorite(recipeId) {
    return getFavorites().includes(recipeId);
}

function toggleFavorite(recipeId) {
    const favorites = getFavorites();
    const index = favorites.indexOf(recipeId);
    if (index === -1) {
        favorites.push(recipeId);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem("recipeFavorites", JSON.stringify(favorites));
    return index === -1;
}

function renderFavoriteButton(recipeId) {
    const active = isFavorite(recipeId);
    return `<button class="favorite-btn${active ? " active" : ""}" data-id="${recipeId}" aria-label="${active ? "Remove from favorites" : "Add to favorites"}">♥</button>`;
}

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".favorite-btn[data-id]");
    if (!btn) return;

    const id = btn.dataset.id;
    const isNowFavorite = toggleFavorite(id);

    btn.classList.toggle("active", isNowFavorite);
    btn.setAttribute("aria-label", isNowFavorite ? "Remove from favorites" : "Add to favorites");

    if (btn.classList.contains("favorite-btn-detail")) {
        btn.innerHTML = `♥ ${isNowFavorite ? "In Favorites" : "Add to Favorites"}`;
    }

    const favoritesList = document.getElementById("favorites-list");
    if (favoritesList && !isNowFavorite) {
        const card = btn.closest(".recipe-card");
        if (card) {
            card.remove();
            if (favoritesList.querySelectorAll(".recipe-card").length === 0) {
                renderFavoritesEmptyState(favoritesList);
            }
        }
    }
});

function renderFavoritesEmptyState(container) {
    container.innerHTML = `
        <div class="favorites-empty">
            <span class="favorites-empty-icon">♡</span>
            <h2>No favorites yet</h2>
            <p>Browse recipes and click the heart icon to save your favorites here.</p>
            <a href="recipes.html" class="btn">Discover Recipes</a>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const favoritesList = document.getElementById("favorites-list");
    if (!favoritesList) return;

    const favorites = getFavorites();
    const allRecipes = typeof recipes !== "undefined" ? recipes : [];
    const favoriteRecipes = allRecipes.filter(r => favorites.includes(r.id));

    if (favoriteRecipes.length === 0) {
        renderFavoritesEmptyState(favoritesList);
        return;
    }

    favoriteRecipes.forEach(recipe => {
        const card = document.createElement("article");
        card.classList.add("recipe-card");
        card.innerHTML = `
            ${renderFavoriteButton(recipe.id)}
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
        favoritesList.appendChild(card);
    });
});