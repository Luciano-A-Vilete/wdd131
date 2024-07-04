let likeCount = 0;
let dislikeCount = 0;

function like() {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
}

function dislike() {
    dislikeCount++;
    document.getElementById("dislikeCount").innerText = dislikeCount;
}


function selectScenario() {
    const select = document.getElementById("scenarioSelect");
    const selectedOption = select.options[select.selectedIndex].value;
    const contentDiv = document.getElementById("scenarioContent");


    contentDiv.innerHTML = "";


    switch(selectedOption) {
        case "recipe":
            contentDiv.innerHTML = "<p>The best lemonade recipe for a summer party typically involves fresh lemons, sweetener, and a touch of creativity. Here's a refreshing recipe to try:</p><ul><li>Freshly squeezed lemon juice</li><li>Simple syrup (sugar dissolved in equal parts water)</li><li>Cold water</li><li>Sliced lemons and fresh mint for garnish</li></ul>";
            break;
        case "flavors":
            contentDiv.innerHTML = "<p>You can find unique lemonade flavors at specialty food stores, farmer's markets, or by experimenting with your own recipes at home. Some unusual flavors to try include lavender, cucumber-mint, or strawberry-basil.</p>";
            break;
        case "vegan-sugar-free":
            contentDiv.innerHTML = "<p>For vegan or sugar-free lemonade recipes, you can explore online recipe websites, vegan cooking blogs, or specialty cookbooks focused on plant-based and sugar-free cooking. You can also substitute traditional sweeteners with alternatives like agave syrup, stevia, or monk fruit sweetener.</p>";
            break;
        case "large-crowd":
            contentDiv.innerHTML = "<p>To make lemonade for a large crowd, you'll need:</p><ul><li>Lots of lemons</li><li>Sugar or sweetener</li><li>Water</li><li>A large pitcher or dispenser</li><li>Ice cubes</li><li>Lemon slices and mint leaves for garnish (optional)</li></ul><p>Consider using a lemonade concentrate or preparing the lemonade in batches to ensure it stays fresh and cold throughout the event.</p>";
            break;
        default:
            contentDiv.innerHTML = "<p>Please select a scenario from the dropdown menu.</p>";
    }
}
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});









const recipes = [
    {
        title: "Strawberry Lemonade",
        description: "This recipe offers a delightful blend of fresh strawberries and zesty lemons, creating a sweet and tangy homemade Strawberry Lemonade. After blending and straining the strawberries, they're combined with lemon juice, sugar, and water, then chilled for optimal flavor. Garnish with lemon slices and mint for an elegant touch. Adjust sugar levels to taste, ensuring a refreshing beverage perfect for sipping on hot summer days.",
        imageUrl: "../project/img/strawbery.webp"
    },
    {
        title: "Classic Lemonade",
        description: "A refreshing classic lemonade made with freshly squeezed lemon juice, sugar, and water. Perfect for quenching your thirst on a hot summer day. Adjust the sweetness to your liking.",
        imageUrl: "../project/img/classic-lemonade.webp"
    },
    
    {
        title: "Mango Smoothie",
        description: "A delicious mango smoothie made with fresh mangoes, yogurt, and a touch of honey. Blend until smooth and enjoy this tropical treat any time of the day.",
        imageUrl: "../project/img/mango-lemonade.webp"
    }
];

const recipesContainer = document.getElementById('recipes-container');

        recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');

            const imageElement = document.createElement('img');
            imageElement.setAttribute('src', recipe.imageUrl);
            imageElement.setAttribute('alt', `${recipe.title}`);
            imageElement.setAttribute('loading', 'lazy');

            const contentElement = document.createElement('div');
            contentElement.classList.add('recipe-content');

            const titleElement = document.createElement('h2');
            titleElement.textContent = recipe.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = recipe.description;

            contentElement.appendChild(titleElement);
            contentElement.appendChild(descriptionElement);

            recipeElement.appendChild(imageElement);
            recipeElement.appendChild(contentElement);

            recipesContainer.appendChild(recipeElement);
        });














       