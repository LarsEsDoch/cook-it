function getRecipesByCategory(categoryId) {
    return recipes.filter(recipe => recipe.categories && recipe.categories.includes(categoryId));
}

function getCategoryRecipeCount(categoryId) {
    return getRecipesByCategory(categoryId).length;
}

function getTopCategories(n) {
    return [...categories]
        .map(cat => ({ ...cat, count: getCategoryRecipeCount(cat.id) }))
        .filter(cat => cat.count > 0)
        .sort((a, b) => b.count - a.count)
        .slice(0, n);
}

function getCategoryHref(categoryId) {
    const path = window.location.pathname;
    if (path.includes("/recipes/")) return `categories.html?category=${categoryId}`;
    if (path.includes("/info/")) return `../recipes/categories.html?category=${categoryId}`;
    return `recipes/categories.html?category=${categoryId}`;
}

function renderCategoryCard(cat, count) {
    return `
        <a href="${getCategoryHref(cat.id)}" class="category-card">
            <span class="category-icon">${cat.icon}</span>
            <div class="category-card-body">
                <h3>${cat.title}</h3>
                <p>${cat.description}</p>
            </div>
            <span class="category-count">${count} recipe${count !== 1 ? "s" : ""}</span>
        </a>
    `;
}

function renderCategoriesGrid(container) {
    const groups = {};

    categories.forEach(cat => {
        if (!groups[cat.group]) {
            groups[cat.group] = { label: cat.groupLabel, items: [] };
        }
        groups[cat.group].items.push({ ...cat, count: getCategoryRecipeCount(cat.id) });
    });

    container.innerHTML = Object.values(groups).map(group => `
        <div class="category-group">
            <h2 class="category-group-title">${group.label}</h2>
            <div class="category-cards-grid">
                ${group.items.map(cat => renderCategoryCard(cat, cat.count)).join("")}
            </div>
        </div>
    `).join("");
}

function renderFilteredRecipes(container, category) {
    const matchingRecipes = getRecipesByCategory(category.id);

    document.title = `Cook it - ${category.title}`;

    container.innerHTML = `
        <div class="category-filter-header">
            <a href="categories.html" class="back-link">← All Categories</a>
            <div class="category-filter-meta">
                <span class="category-filter-icon">${category.icon}</span>
                <div>
                    <h1>${category.title}</h1>
                    <p>${category.description} · ${matchingRecipes.length} recipe${matchingRecipes.length !== 1 ? "s" : ""}</p>
                </div>
            </div>
        </div>
    `;

    if (matchingRecipes.length === 0) {
        container.innerHTML += `<p class="no-results">No recipes in this category yet.</p>`;
        return;
    }

    const grid = document.createElement("div");
    grid.classList.add("recipes-grid");

    matchingRecipes.forEach(recipe => {
        const card = document.createElement("article");
        card.classList.add("recipe-card");

        const favBtn = typeof renderFavoriteButton === "function"
            ? renderFavoriteButton(recipe.id)
            : "";

        card.innerHTML = `
            ${favBtn}
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
        grid.appendChild(card);
    });

    container.appendChild(grid);
}

function renderFeaturedCategories(container) {
    const top = getTopCategories(5);
    container.innerHTML = top.map(cat => renderCategoryCard(cat, cat.count)).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    const categoriesGrid = document.getElementById("categories-grid");
    const featuredCategories = document.getElementById("featured-categories");

    if (categoriesGrid) {
        const params = new URLSearchParams(window.location.search);
        const categoryId = params.get("category");

        if (categoryId) {
            const category = categories.find(c => c.id === categoryId);
            if (category) {
                renderFilteredRecipes(categoriesGrid, category);
            } else {
                categoriesGrid.innerHTML = `<p class="no-results">Category not found.</p>`;
            }
        } else {
            renderCategoriesGrid(categoriesGrid);
        }
    }

    if (featuredCategories) {
        renderFeaturedCategories(featuredCategories);
    }
});