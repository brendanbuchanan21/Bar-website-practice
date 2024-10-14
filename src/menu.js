export function loadMenuPage() {

    const content = document.getElementById("content");

    content.innerHTML = '';

const menuPage = document.createElement("section");
menuPage.id = "menu-page";


const menuTitle = document.createElement("p");
menuTitle.id = "menu-title";
menuTitle.textContent = "Menu";
menuPage.appendChild(menuTitle);

const menuContainer = document.createElement("div");
menuContainer.id = "menu-container";
menuPage.appendChild(menuContainer);

const menuItems = [
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWSvlVsCsHGGzPKCffQr6is7mSj57ru4CpA&s',
        price: '$16',
        name: 'Wings',
        description: 'Our fresh, never frozen wings are hand-tossed in our homemade sauces',
    }, 
    {
        imgSrc: 'https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg',
        price: '$11',
        name: 'Cheeseburger',
        description: 'Our burgers are made with love and handpressed every day',
    },
    {
        imgSrc: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/7/9/0/DV2815_Red-Door-Fish-Chips.jpg.rend.hgtvcom.1280.1280.suffix/1531159996001.webp',
        price: '$13',
        name: 'Fish & Chips',
        description: 'Delicious fish and chips served hot and crispy',
    },
    {
        imgSrc: 'https://imagedelivery.net/9lr8zq_Jvl7h6OFWqEi9IA/6876b3e6-af4c-4401-bed4-f239fd570900/public',
        price: '$19',
        name: 'Frisbee Burger',
        description: 'The largest burger made in all of Missoula',
    },
    {
        imgSrc: 'https://www.savingdessert.com/wp-content/uploads/2020/09/Restaurant-Style-Salsa-5.jpg',
        price: '$9',
        name: 'Chips & Salsa',
        description: 'A quick starter that gets the party started!',
    },
    {
        imgSrc: 'https://cdn.sanity.io/images/g1s4qnmz/production/f8de3529e401762005059c9bdf7938fd06bd2b53-1500x1500.jpg',
        price: '$12',
        name: 'Chicken Sandwhich',
        description: 'Our chicken sandwich is on par with our burgers and delicioso',
    },
    {
        imgSrc: 'https://hips.hearstapps.com/hmg-prod/images/190319-ham-and-cheese-416-1553791878.jpg',
        price: '$11',
        name: 'Ham & Cheese Sandwich',
        description: 'Served on texas toast and made with our locally made cheese',
    },
    {
        imgSrc: 'https://www.thespruceeats.com/thmb/2GoDt7juuaU7lxtQDq-_IjEr6t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-our-favorite-simple-green-salad-recipe-7370448-hero-01-4ca9788a0a3c4d53b70f1d07f8382b7f.jpg',
        price: '$7',
        name: 'Salad',
        description: 'Try our salad if you want something light!',
    },


];


menuItems.forEach(item => { 
    const menuCard = document.createElement("div");
menuCard.classList.add("menu-card");

const menuImg = document.createElement("img");
menuImg.classList.add("menu-image");
menuImg.src = item.imgSrc;

const menuPrice = document.createElement("p");
menuPrice.classList.add("menu-price");
menuPrice.innerHTML = `<strong>${item.price}</strong>`;

const foodName = document.createElement("p");
foodName.classList.add("food-name");
foodName.textContent = item.name;

const foodDescription = document.createElement("p");
foodDescription.classList.add("food-description");
foodDescription.innerHTML = item.description;

//append elements to the new card
menuCard.appendChild(menuImg);
menuCard.appendChild(menuPrice);
menuCard.appendChild(foodName);
menuCard.appendChild(foodDescription);
    

menuContainer.appendChild(menuCard);
});


content.appendChild(menuPage);
}