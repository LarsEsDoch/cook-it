const categories = [
    { id: "breakfast-brunch", title: "Breakfast & Brunch", icon: "🌅", description: "Pancakes, eggs, and morning classics", group: "course", groupLabel: "By Course" },
    { id: "starters-snacks", title: "Starters & Snacks", icon: "🥗", description: "Finger food and light appetizers", group: "course", groupLabel: "By Course" },
    { id: "soups-stews", title: "Soups & Stews", icon: "🍲", description: "Hearty soups and warming stews", group: "course", groupLabel: "By Course" },
    { id: "main-dishes", title: "Main Dishes", icon: "🍽️", description: "The star of every meal", group: "course", groupLabel: "By Course" },
    { id: "side-dishes", title: "Side Dishes", icon: "🫑", description: "Vegetables, rice, and bread", group: "course", groupLabel: "By Course" },
    { id: "salads", title: "Salads", icon: "🥙", description: "Fresh sides and satisfying meal salads", group: "course", groupLabel: "By Course" },
    { id: "desserts", title: "Desserts", icon: "🍮", description: "Sweet endings to any meal", group: "course", groupLabel: "By Course" },
    { id: "baking", title: "Baking", icon: "🍰", description: "Cakes, breads, cookies, and more", group: "course", groupLabel: "By Course" },
    { id: "drinks", title: "Drinks", icon: "🥤", description: "Smoothies, juices, and cocktails", group: "course", groupLabel: "By Course" },

    { id: "vegetarian", title: "Vegetarian", icon: "🥕", description: "No meat or fish", group: "diet", groupLabel: "Diet & Lifestyle" },
    { id: "vegan", title: "Vegan", icon: "🌱", description: "Purely plant-based", group: "diet", groupLabel: "Diet & Lifestyle" },
    { id: "low-carb", title: "Low Carb", icon: "🏃", description: "Low in carbohydrates", group: "diet", groupLabel: "Diet & Lifestyle" },
    { id: "high-protein", title: "High Protein", icon: "💪", description: "Protein-packed for fitness", group: "diet", groupLabel: "Diet & Lifestyle" },
    { id: "gluten-free", title: "Gluten Free", icon: "🌾", description: "Safe for gluten intolerances", group: "diet", groupLabel: "Diet & Lifestyle" },

    { id: "quick-meals", title: "Quick Meals", icon: "⚡", description: "Ready in under 30 minutes", group: "time", groupLabel: "Time & Effort" },
    { id: "one-pot", title: "One-Pot", icon: "🥘", description: "Everything in one pot or pan", group: "time", groupLabel: "Time & Effort" },
    { id: "meal-prep", title: "Meal Prep", icon: "📦", description: "Perfect for preparing ahead", group: "time", groupLabel: "Time & Effort" },
    { id: "easy", title: "Easy Recipes", icon: "👍", description: "Few ingredients, simple steps", group: "time", groupLabel: "Time & Effort" },

    { id: "seasonal", title: "Seasonal", icon: "🍂", description: "Best with fresh, in-season produce", group: "occasion", groupLabel: "Occasion & Season" },
    { id: "grilling-bbq", title: "Grilling & BBQ", icon: "🔥", description: "Summer favorites and marinades", group: "occasion", groupLabel: "Occasion & Season" },
    { id: "festivities", title: "Festivities", icon: "🎉", description: "Christmas, Easter, birthday food", group: "occasion", groupLabel: "Occasion & Season" },
    { id: "comfort-food", title: "Comfort Food", icon: "🛋️", description: "Soul food for cozy evenings", group: "occasion", groupLabel: "Occasion & Season" },
    { id: "date-night", title: "Date Night", icon: "🕯️", description: "Impressive but manageable meals for two", group: "occasion", groupLabel: "Occasion & Season" },
    { id: "late-night", title: "Late Night Snacks", icon: "🦉", description: "Quick, satisfying bites for the midnight hours", group: "occasion", groupLabel: "Occasion & Season" },

    { id: "poultry-meat", title: "Poultry & Meat", icon: "🥩", description: "Chicken, beef, pork, and more", group: "ingredient", groupLabel: "Main Ingredient" },
    { id: "fish-seafood", title: "Fish & Seafood", icon: "🐟", description: "From the ocean to your plate", group: "ingredient", groupLabel: "Main Ingredient" },
    { id: "pasta-noodles", title: "Pasta & Noodles", icon: "🍝", description: "A fan favorite with endless variety", group: "ingredient", groupLabel: "Main Ingredient" },
    { id: "rice-potatoes", title: "Rice & Potatoes", icon: "🥔", description: "Satisfying carb-based dishes", group: "ingredient", groupLabel: "Main Ingredient" },
    { id: "vegetables", title: "Vegetables", icon: "🥦", description: "Veggie-based and plant-forward", group: "ingredient", groupLabel: "Main Ingredient" },

    { id: "italian", title: "Italian", icon: "🍕", description: "Pasta, pizza, and Mediterranean flavors", group: "cuisine", groupLabel: "Cuisine" },
    { id: "asian", title: "Asian", icon: "🍜", description: "Curries, stir-fries, and sushi", group: "cuisine", groupLabel: "Cuisine" },
    { id: "german", title: "German", icon: "🥨", description: "Traditional and hearty meals", group: "cuisine", groupLabel: "Cuisine" },
    { id: "mexican", title: "Mexican", icon: "🌮", description: "Tacos, burritos, and spicy flavors", group: "cuisine", groupLabel: "Cuisine" },

    { id: "budget-friendly", title: "Budget-Friendly", icon: "🪙", description: "Delicious meals that save money", group: "planning", groupLabel: "Planning & Budget" },
    { id: "family-friendly", title: "Family Friendly", icon: "👨‍👩‍👧‍👦", description: "Meals that kids will actually eat", group: "planning", groupLabel: "Planning & Budget" }
];