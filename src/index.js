
import './styles.css'; // Ensure you import your CSS file
import { loadMenuPage } from './menu.js';
import { generateHomePage } from './homepage.js';

generateHomePage();

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

    loadMenuPage();
});

const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
    generateHomePage();
});
