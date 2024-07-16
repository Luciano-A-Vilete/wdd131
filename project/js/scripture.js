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
        case "pearlofgreatprice":
            contentDiv.innerHTML = "<p>If you want to know more about the relation and teachings of God with the ld Testament Patriarchs like Moses, Abraham and Enoch, you can find it in The Pearl of Great Price.</p>";
            break;
        case "bookofmormon":
            contentDiv.innerHTML = "<p>If you want to know more about Ancient Americans History of Faith and Development, you should try to read The Book of Mormon, Another Testament of Jesus Christ!</p>";
            break;
        case "doctrineandcovenants":
            contentDiv.innerHTML = "<p>If you want to discover if God still talks with man and reveal His will and Plans, you can find answer to this points reading Doctrine & Covenants.</p>";
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














       