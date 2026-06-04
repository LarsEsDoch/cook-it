const recipes = [
    {
        id: "pasta-tomato",
        title: "Tomato Pasta",
        description: "A quick and easy pasta dish with fresh tomato sauce.",
        image: "img/recipes/pasta.jpg",
        time: "25 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "200 g pasta",
            "250 g tomatoes",
            "1 garlic clove",
            "2 tbsp olive oil",
            "Salt",
            "Pepper"
        ],
        steps: [
            "Cook the pasta according to the package instructions.",
            "Chop the tomatoes and garlic.",
            "Heat olive oil in a pan and sauté the garlic.",
            "Add tomatoes and simmer for 10 minutes.",
            "Mix the sauce with the pasta and serve."
        ]
    },
    {
        id: "fresh-salad",
        title: "Fresh Salad",
        description: "A light and healthy salad for every day.",
        image: "img/recipes/salad.jpg",
        time: "10 min",
        difficulty: "Easy",
        servings: 1,
        ingredients: [
            "Lettuce",
            "Tomatoes",
            "Cucumber",
            "Olive oil",
            "Lemon juice",
            "Salt"
        ],
        steps: [
            "Wash and chop all vegetables.",
            "Mix olive oil, lemon juice, and salt.",
            "Combine everything in a bowl.",
            "Serve fresh."
        ]
    },
    {
        id: "vegetable-stir-fry",
        title: "Vegetable Stir-Fry",
        description: "A colorful and crunchy Asian-style vegetable stir-fry with a savory soy sauce.",
        image: "img/recipes/stir-fry.jpg",
        time: "20 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "150 g bell peppers",
            "100 g broccoli florets",
            "1 carrot",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tsp grated ginger"
        ],
        steps: [
            "Slice the carrot, bell peppers, and broccoli into bite-sized pieces.",
            "Heat sesame oil in a large pan or wok over high heat.",
            "Add the vegetables and ginger, stir-frying for about 5-7 minutes until tender-crisp.",
            "Pour in the soy sauce and toss everything to coat evenly.",
            "Serve hot, optionally with rice or noodles."
        ]
    },
    {
        id: "creamy-mushroom-risotto",
        title: "Creamy Mushroom Risotto",
        description: "A rich and comforting Italian classic featuring earthy mushrooms and arborio rice.",
        image: "img/recipes/risotto.jpg",
        time: "40 min",
        difficulty: "Medium",
        servings: 2,
        ingredients: [
            "150 g Arborio rice",
            "200 g mushrooms (sliced)",
            "1 small onion (finely chopped)",
            "500 ml vegetable broth (warm)",
            "30 g Parmesan cheese (grated)",
            "2 tbsp butter"
        ],
        steps: [
            "Melt half the butter in a pot and sauté the onion and mushrooms until golden.",
            "Add the Arborio rice and stir for 1 minute until the grains are translucent at the edges.",
            "Gradually add the warm vegetable broth, one ladle at a time, stirring constantly.",
            "Wait until the liquid is absorbed before adding the next ladle (takes about 20 minutes).",
            "Remove from heat, stir in the remaining butter and Parmesan cheese, then let it rest for 2 minutes before serving."
        ]
    },
    {
        id: "avocado-toast",
        title: "Avocado Egg Toast",
        description: "A simple yet delicious breakfast or snack featuring mashed avocado and a perfectly fried egg.",
        image: "img/recipes/avocado-toast.jpg",
        time: "10 min",
        difficulty: "Easy",
        servings: 1,
        ingredients: [
            "2 slices of whole-grain bread",
            "1 ripe avocado",
            "1 egg",
            "1 tsp lemon juice",
            "Salt and red pepper flakes"
        ],
        steps: [
            "Toast the bread slices to your desired crispiness.",
            "Mash the avocado in a small bowl with lemon juice, salt, and pepper.",
            "Fry the egg in a pan to your liking (sunny-side up recommended).",
            "Spread the mashed avocado evenly over the toasted bread.",
            "Top with the fried egg and sprinkle with red pepper flakes."
        ]
    },
    {
        id: "classic-pancakes",
        title: "Classic Fluffy Pancakes",
        description: "Thick and fluffy American-style pancakes, perfect for a weekend breakfast.",
        image: "img/recipes/pancakes.jpg",
        time: "15 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "150 g all-purpose flour",
            "1 tbsp sugar",
            "1 tsp baking powder",
            "200 ml milk",
            "1 egg",
            "Butter for the pan"
        ],
        steps: [
            "In a bowl, mix the flour, sugar, and baking powder.",
            "Whisk the milk and egg together, then pour into the dry ingredients and mix until just combined.",
            "Melt a small amount of butter in a non-stick frying pan over medium heat.",
            "Pour small portions of batter into the pan and cook until bubbles form on the surface.",
            "Flip and cook the other side until golden brown. Serve with syrup or fresh berries."
        ]
    },
    {
        id: "banana-bread",
        title: "Classic Banana Bread",
        description: "A moist and sweet bread that is perfect for using up overripe bananas.",
        image: "img/recipes/banana-bread.jpg",
        time: "60 min",
        difficulty: "Medium",
        servings: 8,
        ingredients: [
            "3 ripe bananas",
            "75 g melted butter",
            "150 g sugar",
            "1 egg",
            "1 tsp vanilla extract",
            "1 tsp baking soda",
            "200 g all-purpose flour"
        ],
        steps: [
            "Preheat your oven to 175°C (350°F) and grease a loaf pan.",
            "In a mixing bowl, mash the ripe bananas with a fork until smooth.",
            "Stir the melted butter into the mashed bananas.",
            "Mix in the sugar, beaten egg, and vanilla extract.",
            "Sprinkle the baking soda and flour over the mixture and stir gently until just combined.",
            "Pour the batter into your prepared loaf pan and bake for about 50 to 60 minutes.",
            "Let it cool in the pan for 10 minutes, then transfer to a wire rack to cool completely."
        ]
    },
    {
        id: "chicken-curry",
        title: "Coconut Chicken Curry",
        description: "An aromatic and creamy curry with tender chicken and a rich coconut sauce.",
        image: "img/recipes/chicken-curry.jpg",
        time: "35 min",
        difficulty: "Medium",
        servings: 3,
        ingredients: [
            "400 g chicken breast (cubed)",
            "1 can (400 ml) coconut milk",
            "2 tbsp curry powder",
            "1 onion (chopped)",
            "2 garlic cloves (minced)",
            "1 tbsp vegetable oil",
            "Salt and pepper"
        ],
        steps: [
            "Heat vegetable oil in a large skillet over medium heat.",
            "Add the chopped onion and minced garlic, sautéing until soft and fragrant.",
            "Add the cubed chicken breast, season with salt and pepper, and cook until browned on all sides.",
            "Stir in the curry powder, ensuring the chicken and onions are well coated.",
            "Pour in the coconut milk and bring the mixture to a simmer.",
            "Reduce heat and let it simmer for 15-20 minutes until the sauce thickens and the chicken is cooked through.",
            "Serve hot with basmati rice."
        ]
    },
    {
        id: "garlic-shrimp",
        title: "Garlic Butter Shrimp",
        description: "Sautéed shrimp tossed in a rich, savory garlic butter sauce with a splash of lemon.",
        image: "img/recipes/garlic-shrimp.jpg",
        time: "15 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "300 g shrimp (peeled and deveined)",
            "4 garlic cloves (finely minced)",
            "3 tbsp butter",
            "1 tbsp olive oil",
            "1 tbsp lemon juice",
            "Fresh parsley (chopped)"
        ],
        steps: [
            "Heat olive oil and 1 tablespoon of butter in a large pan over medium-high heat.",
            "Add the shrimp in a single layer and cook for 1-2 minutes until they start to turn pink.",
            "Flip the shrimp, then add the minced garlic and the remaining butter.",
            "Cook for another 2 minutes, stirring frequently to coat the shrimp in the garlic butter without burning the garlic.",
            "Remove from heat, stir in the lemon juice, and garnish with fresh parsley before serving."
        ]
    },
    {
        id: "lentil-soup",
        title: "Hearty Lentil Soup",
        description: "A comforting, nutrient-dense soup packed with brown lentils and root vegetables.",
        image: "img/recipes/lentil-soup.jpg",
        time: "45 min",
        difficulty: "Easy",
        servings: 4,
        ingredients: [
            "200 g brown lentils (rinsed)",
            "1 large onion (chopped)",
            "2 carrots (diced)",
            "2 celery stalks (diced)",
            "1 liter vegetable broth",
            "1 can (400 g) diced tomatoes",
            "2 tbsp olive oil",
            "1 tsp cumin"
        ],
        steps: [
            "Heat olive oil in a large pot over medium heat and sauté the onion, carrots, and celery for 5 minutes.",
            "Stir in the cumin and cook for 1 minute to release the aroma.",
            "Add the rinsed lentils, diced tomatoes (with their juice), and the vegetable broth.",
            "Bring the soup to a boil, then reduce heat to low, cover, and let it simmer.",
            "Cook for about 30-35 minutes, or until the lentils and vegetables are completely tender.",
            "Season with additional salt and pepper to taste before serving."
        ]
    },
    {
        id: "greek-salad",
        title: "Greek Salad",
        description: "A classic Mediterranean salad with feta cheese, olives, and crisp vegetables.",
        image: "img/recipes/greek-salad.jpg",
        time: "10 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "200 g cherry tomatoes (halved)",
            "1 cucumber (diced)",
            "1 small red onion (thinly sliced)",
            "100 g feta cheese (cubed)",
            "60 g Kalamata olives",
            "3 tbsp olive oil",
            "1 tbsp red wine vinegar",
            "1 tsp dried oregano",
            "Salt and pepper"
        ],
        steps: [
            "Combine the tomatoes, cucumber, red onion, and olives in a large bowl.",
            "Whisk together the olive oil, red wine vinegar, and oregano.",
            "Pour the dressing over the vegetables and toss gently.",
            "Top with the feta cheese cubes — do not stir, so they stay intact.",
            "Season with salt and pepper and serve immediately."
        ]
    },
    {
        id: "shakshuka",
        title: "Shakshuka",
        description: "Eggs poached in a rich, spiced tomato and pepper sauce — a Middle Eastern breakfast classic.",
        image: "img/recipes/shakshuka.jpg",
        time: "30 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "4 eggs",
            "1 can (400 g) crushed tomatoes",
            "1 red bell pepper (diced)",
            "1 onion (chopped)",
            "3 garlic cloves (minced)",
            "1 tsp cumin",
            "1 tsp smoked paprika",
            "½ tsp chili flakes",
            "2 tbsp olive oil",
            "Fresh parsley and feta to serve"
        ],
        steps: [
            "Heat olive oil in a wide skillet over medium heat. Sauté the onion and bell pepper for 5 minutes until softened.",
            "Add the garlic, cumin, paprika, and chili flakes, cooking for 1 more minute.",
            "Pour in the crushed tomatoes, season with salt, and simmer for 10 minutes until the sauce thickens slightly.",
            "Make four wells in the sauce and crack an egg into each one.",
            "Cover the pan and cook for 5–8 minutes until the whites are set but yolks are still runny.",
            "Garnish with fresh parsley and crumbled feta. Serve with crusty bread."
        ]
    },
    {
        id: "beef-tacos",
        title: "Crispy Beef Tacos",
        description: "Seasoned ground beef in warm tortillas, topped with fresh salsa and sour cream.",
        image: "img/recipes/beef-tacos.jpg",
        time: "25 min",
        difficulty: "Easy",
        servings: 3,
        ingredients: [
            "400 g ground beef",
            "6 small corn or flour tortillas",
            "1 tsp cumin",
            "1 tsp chili powder",
            "½ tsp garlic powder",
            "1 small onion (diced)",
            "150 g salsa",
            "100 ml sour cream",
            "Shredded lettuce and grated cheese to serve"
        ],
        steps: [
            "Heat a pan over medium-high heat and cook the onion for 2 minutes.",
            "Add the ground beef and break it apart, cooking until browned.",
            "Stir in the cumin, chili powder, and garlic powder. Season with salt and pepper.",
            "Warm the tortillas in a dry pan or directly over a gas flame for 30 seconds each.",
            "Fill the tortillas with the beef mixture, then top with salsa, sour cream, lettuce, and cheese."
        ]
    },
    {
        id: "pumpkin-soup",
        title: "Creamy Pumpkin Soup",
        description: "A velvety, warming soup made from roasted pumpkin with a hint of ginger and coconut.",
        image: "img/recipes/pumpkin-soup.jpg",
        time: "45 min",
        difficulty: "Easy",
        servings: 4,
        ingredients: [
            "800 g pumpkin (peeled and diced)",
            "1 onion (chopped)",
            "2 garlic cloves",
            "1 tsp fresh ginger (grated)",
            "400 ml coconut milk",
            "600 ml vegetable broth",
            "2 tbsp olive oil",
            "Salt, pepper, and nutmeg"
        ],
        steps: [
            "Preheat the oven to 200°C. Toss the pumpkin with olive oil and roast for 25 minutes until golden.",
            "In a large pot, sauté the onion, garlic, and ginger over medium heat until soft.",
            "Add the roasted pumpkin and pour in the vegetable broth. Bring to a simmer for 10 minutes.",
            "Blend the soup until smooth using an immersion blender.",
            "Stir in the coconut milk and season with salt, pepper, and a pinch of nutmeg.",
            "Serve hot with a swirl of extra coconut milk and crusty bread."
        ]
    },
    {
        id: "caprese-salad",
        title: "Caprese Salad",
        description: "A simple Italian salad of fresh mozzarella, ripe tomatoes, and fragrant basil.",
        image: "img/recipes/caprese.jpg",
        time: "5 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "2 large ripe tomatoes",
            "200 g fresh mozzarella",
            "A handful of fresh basil leaves",
            "3 tbsp extra-virgin olive oil",
            "Flaky sea salt and black pepper",
            "Optional: balsamic glaze"
        ],
        steps: [
            "Slice the tomatoes and mozzarella into rounds of similar thickness.",
            "Arrange them alternately on a plate, overlapping slightly.",
            "Tuck fresh basil leaves between the slices.",
            "Drizzle generously with extra-virgin olive oil.",
            "Season with flaky salt and black pepper. Add a drizzle of balsamic glaze if desired."
        ]
    },
    {
        id: "fried-rice",
        title: "Egg Fried Rice",
        description: "A quick and satisfying wok-fried rice with scrambled egg, vegetables, and soy sauce.",
        image: "img/recipes/fried-rice.jpg",
        time: "20 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "300 g cooked rice (day-old works best)",
            "2 eggs",
            "100 g frozen peas and corn",
            "3 spring onions (sliced)",
            "3 tbsp soy sauce",
            "1 tbsp sesame oil",
            "2 tbsp vegetable oil",
            "2 garlic cloves (minced)"
        ],
        steps: [
            "Heat vegetable oil in a wok or large frying pan over high heat.",
            "Add the garlic and stir-fry for 30 seconds until fragrant.",
            "Add the peas and corn, tossing for 2 minutes.",
            "Push everything to the side and scramble the eggs in the centre of the pan.",
            "Add the rice and break up any clumps, mixing everything together.",
            "Pour in the soy sauce and sesame oil, toss well, and serve topped with spring onions."
        ]
    },
    {
        id: "french-omelette",
        title: "French Omelette",
        description: "A silky, perfectly rolled omelette — the ultimate test of egg technique.",
        image: "img/recipes/omelette.jpg",
        time: "10 min",
        difficulty: "Medium",
        servings: 1,
        ingredients: [
            "3 fresh eggs",
            "1 tbsp cold butter",
            "Salt and white pepper",
            "Optional fillings: herbs, grated cheese, mushrooms"
        ],
        steps: [
            "Crack the eggs into a bowl, season with salt and white pepper, and beat vigorously with a fork.",
            "Melt the butter in a non-stick pan over medium heat — it should foam but not brown.",
            "Pour in the eggs. Immediately stir rapidly with a spatula while shaking the pan for about 30 seconds.",
            "Spread the egg evenly and let it just set on the surface, keeping it pale and soft inside.",
            "Add any fillings to the centre, then roll the omelette onto a plate. It should be smooth and golden-free outside."
        ]
    },
    {
        id: "spaghetti-aglio-olio",
        title: "Spaghetti Aglio e Olio",
        description: "A Roman classic — spaghetti tossed with olive oil, golden garlic, and chili flakes. Minimal ingredients, maximum flavour.",
        image: "img/recipes/aglio-olio.jpg",
        time: "20 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "200 g spaghetti",
            "5 garlic cloves (thinly sliced)",
            "5 tbsp extra-virgin olive oil",
            "1 tsp red chili flakes",
            "Fresh parsley (chopped)",
            "Salt",
            "Grated Pecorino or Parmesan to serve"
        ],
        steps: [
            "Cook the spaghetti in well-salted boiling water until al dente. Reserve 100 ml pasta water before draining.",
            "While the pasta cooks, heat the olive oil in a pan over low heat and slowly toast the garlic until golden — do not let it burn.",
            "Add the chili flakes and remove from heat.",
            "Add the drained pasta directly to the pan with the garlic oil and toss vigorously, adding pasta water a splash at a time to emulsify a light sauce.",
            "Stir in fresh parsley and serve immediately with grated cheese."
        ]
    },
    {
        id: "chocolate-mousse",
        title: "Dark Chocolate Mousse",
        description: "A decadent, airy chocolate mousse made with just four ingredients.",
        image: "img/recipes/chocolate-mousse.jpg",
        time: "20 min",
        difficulty: "Medium",
        servings: 4,
        ingredients: [
            "150 g dark chocolate (70%)",
            "3 eggs (separated)",
            "2 tbsp sugar",
            "200 ml heavy cream"
        ],
        steps: [
            "Melt the chocolate in a heatproof bowl over simmering water (bain-marie). Let cool slightly.",
            "Whip the cream to soft peaks and set aside.",
            "Beat the egg whites with the sugar until stiff peaks form.",
            "Stir the egg yolks into the cooled chocolate one at a time.",
            "Fold in the whipped cream gently, then fold in the egg whites in two additions — keep the mousse airy.",
            "Divide into glasses and refrigerate for at least 2 hours before serving."
        ]
    },
    {
        id: "butter-chicken",
        title: "Butter Chicken",
        description: "A mildly spiced, creamy Indian curry that is endlessly comforting.",
        image: "img/recipes/butter-chicken.jpg",
        time: "50 min",
        difficulty: "Medium",
        servings: 4,
        ingredients: [
            "600 g chicken thighs (cubed)",
            "1 can (400 g) crushed tomatoes",
            "200 ml heavy cream",
            "1 onion (finely chopped)",
            "3 garlic cloves (minced)",
            "1 tsp fresh ginger (grated)",
            "2 tbsp butter",
            "1 tbsp garam masala",
            "1 tsp cumin",
            "1 tsp turmeric"
        ],
        steps: [
            "Season the chicken with half the spices and a pinch of salt. Sear in a hot pan with a little oil until browned. Set aside.",
            "In the same pan, melt the butter and sauté the onion until soft and golden.",
            "Add the garlic, ginger, and remaining spices, cooking for 1 minute.",
            "Pour in the crushed tomatoes and simmer for 10 minutes.",
            "Blend the sauce until smooth, then return to the pan.",
            "Add the chicken back in, pour in the cream, and simmer for 15 more minutes.",
            "Serve with naan or basmati rice."
        ]
    },
    {
        id: "caesar-salad",
        title: "Classic Caesar Salad",
        description: "Crisp romaine lettuce with homemade Caesar dressing and golden croutons.",
        image: "img/recipes/caesar-salad.jpg",
        time: "20 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "1 romaine lettuce (torn)",
            "40 g Parmesan (shaved)",
            "2 slices of white bread (cubed for croutons)",
            "2 tbsp olive oil",
            "3 tbsp mayonnaise",
            "1 tbsp lemon juice",
            "1 tsp Worcestershire sauce",
            "1 garlic clove (minced)",
            "Salt and pepper"
        ],
        steps: [
            "Toss the bread cubes with olive oil, salt, and pepper. Bake at 200°C for 10 minutes until golden and crunchy.",
            "Whisk together the mayonnaise, lemon juice, Worcestershire sauce, garlic, salt, and pepper for the dressing.",
            "Place the torn romaine in a large bowl and toss with the dressing until every leaf is coated.",
            "Top with the croutons and shaved Parmesan.",
            "Serve immediately."
        ]
    },
    {
        id: "french-toast",
        title: "French Toast",
        description: "Golden, custardy French toast — perfect for a lazy weekend breakfast.",
        image: "img/recipes/french-toast.jpg",
        time: "15 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "4 thick slices of brioche or white bread",
            "2 eggs",
            "80 ml milk",
            "1 tsp vanilla extract",
            "½ tsp cinnamon",
            "1 tbsp butter",
            "Maple syrup and fresh fruit to serve"
        ],
        steps: [
            "Whisk together the eggs, milk, vanilla extract, and cinnamon in a shallow bowl.",
            "Dip each bread slice into the egg mixture, letting it soak for about 20 seconds per side.",
            "Melt the butter in a non-stick pan over medium heat.",
            "Fry the soaked slices for 2–3 minutes per side until deeply golden.",
            "Serve immediately with maple syrup and fresh fruit."
        ]
    },
    {
        id: "minestrone",
        title: "Classic Minestrone",
        description: "A hearty Italian vegetable soup loaded with seasonal vegetables, beans, and pasta.",
        image: "img/recipes/minestrone.jpg",
        time: "50 min",
        difficulty: "Easy",
        servings: 4,
        ingredients: [
            "1 can (400 g) cannellini beans (drained)",
            "1 can (400 g) diced tomatoes",
            "2 carrots (diced)",
            "2 celery stalks (diced)",
            "1 zucchini (diced)",
            "1 onion (chopped)",
            "100 g small pasta (e.g. ditalini)",
            "1 liter vegetable broth",
            "2 tbsp olive oil",
            "1 tsp dried Italian herbs",
            "Parmesan rind (optional, for depth)"
        ],
        steps: [
            "Heat olive oil in a large pot over medium heat. Sauté the onion, carrots, and celery for 5 minutes.",
            "Add the zucchini, herbs, and diced tomatoes. Cook for 2 minutes.",
            "Pour in the vegetable broth. Add the Parmesan rind if using. Bring to a boil.",
            "Reduce heat and simmer for 20 minutes until the vegetables are tender.",
            "Add the beans and pasta, cooking for another 10 minutes until the pasta is al dente.",
            "Remove the Parmesan rind, adjust seasoning, and serve with a drizzle of olive oil."
        ]
    },
    {
        id: "mango-smoothie",
        title: "Tropical Mango Smoothie",
        description: "A thick, refreshing smoothie bursting with tropical fruit flavour.",
        image: "img/recipes/mango-smoothie.jpg",
        time: "5 min",
        difficulty: "Easy",
        servings: 2,
        ingredients: [
            "300 g frozen mango chunks",
            "1 ripe banana",
            "200 ml coconut milk",
            "100 ml orange juice",
            "1 tsp honey (optional)",
            "Ice cubes"
        ],
        steps: [
            "Add the frozen mango, banana, coconut milk, and orange juice to a blender.",
            "Blend on high for 60 seconds until completely smooth and creamy.",
            "Taste and add honey if a sweeter result is desired.",
            "Pour over ice into two glasses and serve immediately."
        ]
    },
    {
        id: "spinach-quiche",
        title: "Spinach & Feta Quiche",
        description: "A flaky shortcrust quiche filled with a creamy spinach and salty feta custard.",
        image: "img/recipes/quiche.jpg",
        time: "60 min",
        difficulty: "Medium",
        servings: 6,
        ingredients: [
            "1 pre-made shortcrust pastry sheet",
            "200 g fresh spinach",
            "150 g feta cheese (crumbled)",
            "3 eggs",
            "200 ml heavy cream",
            "1 small onion (finely chopped)",
            "1 tbsp butter",
            "Salt, pepper, and nutmeg"
        ],
        steps: [
            "Preheat the oven to 180°C. Line a 24 cm tart pan with the pastry and blind-bake for 10 minutes with baking weights.",
            "Sauté the onion in butter until soft. Add the spinach and cook until wilted. Let cool, then squeeze out excess moisture.",
            "Whisk together the eggs and cream. Season with salt, pepper, and a pinch of nutmeg.",
            "Spread the spinach and onion mixture over the par-baked crust. Scatter the feta on top.",
            "Pour the egg and cream mixture over the filling.",
            "Bake for 30–35 minutes until set and lightly golden. Rest for 10 minutes before slicing."
        ]
    }
];

const savedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
recipes.push(...savedRecipes);