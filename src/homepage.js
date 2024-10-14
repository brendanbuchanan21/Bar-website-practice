import { loadMenuPage } from "./menu";

export function generateHomePage() {
    const content = document.getElementById("content");

content.innerHTML = '';

    // Create the welcome area
    const welcomeArea = document.createElement('div');
    welcomeArea.id = 'welcome-area';

    const mainImg = document.createElement('img');
    mainImg.src = "https://imagedelivery.net/9lr8zq_Jvl7h6OFWqEi9IA/2d751954-5cef-4ce0-c686-9896235cff00/public";
    mainImg.className = 'main-img';

    const welcomeText = document.createElement('h1');
    welcomeText.id = 'welcome-text';
    welcomeText.textContent = "Welcome to Desperado Sports Tavern online ordering!";

    const welcomeDescription = document.createElement('p');
    welcomeDescription.textContent = "Voted Missoula's best wings year after year!";

    // Append elements to the welcome area
    welcomeArea.appendChild(mainImg);
    welcomeArea.appendChild(welcomeText);
    welcomeArea.appendChild(welcomeDescription);
    
    // Create a horizontal rule
    const hr = document.createElement('hr');
    hr.className = 'custom-hr';
    
    // Create the menu section
    const menuSection = document.createElement('section');
    menuSection.id = 'menu-first-page-section';

    const browseMenuHeader = document.createElement('div');
    browseMenuHeader.id = 'browse-menu-header';

    const browseMenuText = document.createElement('h1');
    browseMenuText.id = 'browse-menu-text';
    browseMenuText.textContent = "Browse our Menu";

    const menuDescription = document.createElement('p');
    menuDescription.textContent = "Our burgers are handpressed everyday and our wings are tossed in our special homemade sauces.";

    // Append elements to the menu header
    browseMenuHeader.appendChild(browseMenuText);
    browseMenuHeader.appendChild(menuDescription);
    
    // Create the menu cards container
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-p1-container';

    // Define menu items
    const menuItems = [
        {
            imgSrc: "https://www.shutterstock.com/image-vector/fried-chicken-thighs-icon-vector-600nw-2265589887.jpg",
            title: "Wings",
            description: "Our wings are crafted with our signature homemade sauces that will leave you fuller than last time!",
        },
        {
            imgSrc: "https://media.sketchfab.com/models/f62974b78d244172b4162bce312188b3/thumbnails/d71e95bb20b843e4973d966b32836742/798f3664b8fc4b7da851cb7063bd0122.jpeg",
            title: "Burgers",
            description: "Our burgers are made fresh everyday sourced from local beef.",
        },
        {
            imgSrc: "https://emojis.wiki/thumbs/emojis/beer-mug.webp",
            title: "Beer selection",
            description: "Our beer selection is carefully selected across the state to find which beer suits our patrons the best.",
        }
    ];

    // Create menu cards
    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card-p1';

        const img = document.createElement('img');
        img.className = 'menu-card-p1-images';
        img.src = item.imgSrc;

        const cardTitle = document.createElement('h1');
        cardTitle.textContent = item.title;

        const cardDescription = document.createElement('p');
        cardDescription.textContent = item.description;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'menu-p1-button';
        button.textContent = 'Explore Menu';

        button.addEventListener("click", () => {
            loadMenuPage();
        })

        // Append elements to the card
        card.appendChild(img);
        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        card.appendChild(button);

        // Append the card to the menu container
        menuContainer.appendChild(card);
    });

    // Append everything to the main container
    content.appendChild(welcomeArea);
    content.appendChild(hr);
    content.appendChild(menuSection);
    menuSection.appendChild(browseMenuHeader);
    menuSection.appendChild(menuContainer);

   
}


