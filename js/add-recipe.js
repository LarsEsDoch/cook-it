const addRecipeForm = document.getElementById("add-recipe-form");

if (addRecipeForm) {
    addRecipeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const author = document.getElementById("author").value.trim();
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const time = document.getElementById("time").value.trim();
        const difficulty = document.getElementById("difficulty").value;
        const servings = Number(document.getElementById("servings").value);
        const ingredients = document
            .getElementById("ingredients")
            .value
            .split("\n")
            .map((ingredient) => ingredient.trim())
            .filter((ingredient) => ingredient !== "");

        const steps = document
            .getElementById("steps")
            .value
            .split("\n")
            .map((step) => step.trim())
            .filter((step) => step !== "");

        const createdAt = new Date().toLocaleString("de-DE", {
            dateStyle: "medium",
            timeStyle: "short"
        });

        const recipe = {
            id: `${title.toLowerCase().replaceAll(" ", "-")}-${Date.now()}`,
            title,
            description,
            image: "rezept.png",
            time,
            difficulty,
            servings,
            ingredients,
            steps,
            author,
            createdAt
        };

        const savedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
        savedRecipes.push(recipe);

        localStorage.setItem("userRecipes", JSON.stringify(savedRecipes));

        window.location.href = "recipes.html";
    });
}