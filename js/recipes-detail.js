const recipeDetail = document.getElementById("recipe-detail");

const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const recipe = recipes.find((item) => item.id === recipeId);

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

function getUserRating(recipeId) {
    const userRatings = JSON.parse(localStorage.getItem("userRecipeRatings")) || {};
    return userRatings[recipeId] || 0;
}

function saveUserRating(recipeId, stars) {
    const storedRatings = JSON.parse(localStorage.getItem("recipeRatings")) || {};
    const userRatings = JSON.parse(localStorage.getItem("userRecipeRatings")) || {};

    const currentRating = storedRatings[recipeId] || recipe.rating || getDefaultRating(recipe);
    const previousUserRating = userRatings[recipeId] || 0;

    let newAverage;
    let newCount;

    if (previousUserRating > 0) {
        const totalWithoutOldRating = currentRating.average * currentRating.count - previousUserRating;
        newCount = currentRating.count;
        newAverage = (totalWithoutOldRating + stars) / newCount;
    } else {
        const currentTotal = currentRating.average * currentRating.count;
        newCount = currentRating.count + 1;
        newAverage = (currentTotal + stars) / newCount;
    }

    storedRatings[recipeId] = {
        average: Number(newAverage.toFixed(1)),
        count: newCount
    };

    userRatings[recipeId] = stars;

    localStorage.setItem("recipeRatings", JSON.stringify(storedRatings));
    localStorage.setItem("userRecipeRatings", JSON.stringify(userRatings));
}

function renderRating(recipe) {
    const rating = getStoredRating(recipe);
    const userRating = getUserRating(recipe.id);
    const averageText = rating.count > 0 ? rating.average.toFixed(1).replace(".", ",") : "0,0";

    return `
        <section class="recipe-info-section rating-section">
            <h2>Rating</h2>

            <div class="rating-overview">
                <span class="rating-average">${averageText}</span>
                <span>of 5 stars</span>
                <span class="rating-count">(${rating.count} ratings)</span>
            </div>

            <div class="interactive-stars" aria-label="Recipe rating">
                ${[1, 2, 3, 4, 5].map((star) => `
                    <button 
                        type="button" 
                        class="star-button ${star <= userRating ? "active" : ""}" 
                        data-rating="${star}"
                        aria-label="${star} stars given"
                    >
                        ★
                    </button>
                `).join("")}
            </div>

            <p class="rating-message">
                ${userRating > 0 ? `Your rating: ${userRating} stars` : "Rate this recipe from 1 to 5 stars."}
            </p>
        </section>
    `;
}

function activateRatingButtons() {
    const starButtons = document.querySelectorAll(".star-button");

    starButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const stars = Number(button.dataset.rating);

            saveUserRating(recipe.id, stars);

            const ratingSection = document.querySelector(".rating-section");
            ratingSection.outerHTML = renderRating(recipe);

            activateRatingButtons();
        });
    });
}

function renderCategories(recipe) {
    if (!recipe.categories || recipe.categories.length === 0 || typeof categories === "undefined") {
        return "";
    }

    const links = recipe.categories.map(catId => {
        const cat = categories.find(c => c.id === catId);
        if (!cat) return "";
        return `<a href="categories.html?category=${catId}" class="recipe-category-link">${cat.icon} ${cat.title}</a>`;
    }).join("");

    return `<div class="recipe-category-links">${links}</div>`;
}

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
        const stepImageSrc = !recipe.isUserRecipe
            ? "../" + step.image
            : step.image;

        return `
                        <li class="preparation-step-item">
                            <p>${stepText}</p>
                            ${
            stepImage
                ? `<img src="${stepImageSrc}" alt="Preparation step image" class="preparation-step-image">`
                : ""
        }
                        </li>
                    `;
    }).join("")}
            </ol>
        </section>
    `;
}

function getStoredComments(recipeId) {
    const allComments = JSON.parse(localStorage.getItem("recipeComments")) || {};
    return allComments[recipeId] || [];
}

function saveComment(recipeId, username, commentText) {
    if (!commentText.trim()) return;

    const allComments = JSON.parse(localStorage.getItem("recipeComments")) || {};

    if (!allComments[recipeId]) {
        allComments[recipeId] = [];
    }

    const newComment = {
        id: "comment-" + Date.now(),
        user: username.trim() || "Anonymous",
        text: commentText.trim(),
        date: new Date().toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
    };

    allComments[recipeId].unshift(newComment);

    localStorage.setItem("recipeComments", JSON.stringify(allComments));

    return newComment;
}

function renderCommentsSection(recipe) {
    const comments = getStoredComments(recipe.id);

    return `
        <section class="recipe-info-section comments-section">
            <h2>Add Comment</h2>
            <form id="comment-form" class="comment-form">
                <div class="comment-input-group">
                    <label for="comment-username">Your Name</label>
                    <input type="text" id="comment-username" placeholder="Anonymous" class="comment-name-input">
                </div>
                <div class="comment-input-group">
                    <label for="comment-text">Your Comment</label>
                    <textarea id="comment-text" rows="3" placeholder="How did you like the recipe? Any tweaks?" required class="comment-textarea"></textarea>
                </div>
                <button type="submit" class="btn">Post Comment</button>
            </form>
            
            <h2>Comments (${comments.length})</h2>
            <div class="comments-list" id="comments-list">
                ${comments.length === 0
        ? `<p class="no-comments">No comments yet. Be the first to share your thoughts!</p>`
        : comments.map(comment => `
                        <article class="comment-card">
                            <div class="comment-header">
                                <span class="comment-author">${comment.user}</span>
                                <time class="comment-date">${comment.date}</time>
                            </div>
                            <p class="comment-content">${comment.text}</p>
                        </article>
                    `).join("")
    }
            </div>
        </section>
    `;
}

function activateCommentButton() {
    const commentForm = document.getElementById("comment-form");
    if (commentForm) {
        commentForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = document.getElementById("comment-username");
            const textInput = document.getElementById("comment-text");

            saveComment(recipe.id, nameInput.value, textInput.value);

            const commentsList = document.getElementById("comments-list");
            const currentComments = getStoredComments(recipe.id);

            if (commentsList) {
                commentsList.innerHTML = currentComments.length === 0
                    ? `<p class="no-comments">No comments yet. Be the first to share your thoughts!</p>`
                    : currentComments.map(comment => `
                        <article class="comment-card">
                            <div class="comment-header">
                                <span class="comment-author"> ${comment.user}</span>
                                <time class="comment-date">${comment.date}</time>
                            </div>
                            <p class="comment-content">${comment.text}</p>
                        </article>
                    `).join("");
            }

            const heading = document.querySelector(".comments-section h2");
            if (heading) {
                heading.textContent = `Comments (${currentComments.length})`;
            }

            textInput.value = "";
        });
    }
}

if (recipeDetail && recipe) {
    document.title = `Cook it - ${recipe.title}`;

    const imageSrc = !recipe.isUserRecipe || recipe.image === "img/recipes/default-recipe.png"
        ? "../" + recipe.image
        : recipe.image;

    recipeDetail.innerHTML = `
        <img src="${imageSrc}" alt="${recipe.title}" class="recipe-detail-image">

        <h1>${recipe.title}</h1>
        <p>${recipe.description}</p>
        ${typeof renderFavoriteButton === "function"
        ? `<button class="favorite-btn favorite-btn-detail${isFavorite(recipe.id) ? " active" : ""}" data-id="${recipe.id}">
           ♥ ${isFavorite(recipe.id) ? "In Favorites" : "Add to Favorites"}
       </button>`
        : ""}

        ${renderCategories(recipe)}
        ${renderLabels(recipe.labels)}

        <div class="recipe-meta">
            <span>Time: ${recipe.time}</span>
            <span>Difficulty: ${recipe.difficulty}</span>
            <span>Servings: ${recipe.servings}</span>
        </div>
        
        ${recipe.author && recipe.createdAt
        ? `<p class="recipe-author">Added by ${recipe.author} on ${recipe.createdAt}</p>`
        : ""}

        ${renderRating(recipe)}

        ${renderNutrition(recipe.nutrition)}
        ${renderGeneralNotes(recipe.generalNotes)}
        ${renderIngredients(recipe.ingredients)}
        ${renderUtensils(recipe.utensils)}
        ${renderPreparationSteps(recipe.steps)}
        ${renderCommentsSection(recipe)}
    `;

    activateRatingButtons();
    activateCommentButton();
} else if (recipeDetail) {
    recipeDetail.innerHTML = `
        <h1>Recipe not found</h1>
        <p>The recipe you are looking for does not exist.</p>
        <a href="recipes.html" class="btn">Back to recipes</a>
    `;
}