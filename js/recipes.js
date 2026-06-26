const recipesList = document.getElementById("recipes-list");

function getDefaultRating(recipe) {
    if (recipe.isUserRecipe) {
        return {
            average: 0,
            count: 0
        };
    }

    const fakeRatings = {
        "pasta-tomato": { average: 4.8, count: 24 },
        "fresh-salad": { average: 4.4, count: 16 },
        "vegetable-stir-fry": { average: 4.7, count: 31 },
        "creamy-mushroom-risotto": { average: 4.9, count: 42 },
        "avocado-toast": { average: 4.6, count: 19 },
        "classic-pancakes": { average: 4.8, count: 37 },
        "banana-bread": { average: 4.7, count: 29 },
        "chicken-curry": { average: 4.9, count: 45 },
        "garlic-shrimp": { average: 4.6, count: 21 },
        "lentil-soup": { average: 4.5, count: 18 },
        "greek-salad": { average: 4.4, count: 14 },
        "shakshuka": { average: 4.8, count: 33 },
        "beef-tacos": { average: 4.7, count: 28 },
        "pumpkin-soup": { average: 4.6, count: 22 },
        "caprese-salad": { average: 4.5, count: 17 },
        "fried-rice": { average: 4.7, count: 35 },
        "french-omelette": { average: 4.3, count: 12 },
        "spaghetti-aglio-olio": { average: 4.8, count: 39 },
        "chocolate-mousse": { average: 4.9, count: 41 },
        "butter-chicken": { average: 4.9, count: 48 },
        "caesar-salad": { average: 4.4, count: 20 },
        "french-toast": { average: 4.6, count: 26 },
        "minestrone": { average: 4.5, count: 15 },
        "mango-smoothie": { average: 4.7, count: 23 },
        "spinach-quiche": { average: 4.6, count: 19 }
    };

    return fakeRatings[recipe.id] || {
        average: 4.5,
        count: 10
    };
}

function getStoredRating(recipe) {
    const storedRatings = JSON.parse(localStorage.getItem("recipeRatings")) || {};
    return storedRatings[recipe.id] || recipe.rating || getDefaultRating(recipe);
}

function renderRatingSummary(recipe) {
    const rating = getStoredRating(recipe);
    const averageText = rating.count > 0 ? rating.average.toFixed(1).replace(".", ",") : "0,0";

    return `
        <div class="rating-summary">
            <span class="rating-stars">★</span>
            <span>${averageText} Stars</span>
            <span class="rating-count">(${rating.count})</span>
        </div>
    `;
}

if (recipesList) {
    //const userRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
    //console.log(recipes)
    //console.log(userRecipes)

    const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/");

    const recipesToShow = isHomePage
        ? [...recipes]
            .sort((recipeA, recipeB) => {
                const ratingA = getStoredRating(recipeA);
                const ratingB = getStoredRating(recipeB);

                if (ratingB.average !== ratingA.average) {
                    return ratingB.average - ratingA.average;
                }

                return ratingB.count - ratingA.count;
            })
            .slice(0, 10)
        : recipes;

    recipesToShow.forEach((recipe) => {
        const recipeCard = document.createElement("article");
        recipeCard.classList.add("recipe-card");

        const userRecipeBadge = recipe.isUserRecipe
            ? `<span class="user-recipe-badge">${recipe.author ? `Added by ${recipe.author}` : "User made"}</span>`
            : "";

        const imageSrc = !recipe.isUserRecipe || recipe.image === "img/recipes/default-recipe.png"
            ? (isHomePage ? recipe.image : "../" + recipe.image)
            : recipe.image;

        const favBtn = typeof renderFavoriteButton === "function"
            ? renderFavoriteButton(recipe.id)
            : "";

        recipeCard.innerHTML = `
            ${userRecipeBadge}
            ${favBtn}
            <img src="${imageSrc}" alt="${recipe.title}">
            <div class="recipe-card-content">
                <h2>${recipe.title}</h2>
                ${renderRatingSummary(recipe)}
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span>${recipe.time}</span>
                    <span>${recipe.difficulty}</span>
                </div>
                <a href="${isHomePage ? 'recipes/' : ''}recipe-detail.html?id=${recipe.id}" class="btn">View Recipe</a>
            </div>
        `;

        recipesList.appendChild(recipeCard);
    });
}

const rotdContainer = document.getElementById("recipe-of-the-day");

if (rotdContainer) {
    const dayIndex = Math.floor(Date.now() / 86400000);
    const featured = recipes[dayIndex % recipes.length];
    const rating = getStoredRating(featured);
    const avgText = rating.count > 0 ? rating.average.toFixed(1).replace(".", ",") : "0,0";

    rotdContainer.innerHTML = `
        <div class="recipe-of-the-day-card">
            <img src="${featured.image}" alt="${featured.title}" class="recipe-of-the-day-image">
            <div class="recipe-of-the-day-content">
                <h2>${featured.title}</h2>
                <div class="rating-summary">
                    <span class="rating-stars">★</span>
                    <span>${avgText} Stars</span>
                    <span class="rating-count">(${rating.count})</span>
                </div>
                <p>${featured.description}</p>
                <div class="recipe-meta">
                    <span>🕐 ${featured.time}</span>
                    <span>📊 ${featured.difficulty}</span>
                    <span>🍽️ ${featured.servings} serving${featured.servings !== 1 ? "s" : ""}</span>
                </div>
                <a href="recipes/recipe-detail.html?id=${featured.id}" class="btn">View Recipe</a>
            </div>
        </div>
    `;
}