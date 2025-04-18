import { greeting } from "./home.js";

import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";
import { displayContact } from "./contact.js";

console.log(greeting);

const nav = document.querySelector('nav');

const home = document.querySelector('.home-btn');
const menu = document.querySelector('.menu-btn');
const about = document.querySelector('.about-btn');
const contact = document.querySelector('.contact-btn');

nav.addEventListener('click', (event) => {
    let target = event.target;

    if (target.matches('.home-btn')) {
        displayHome();
    }
    else if (target.matches('.menu-btn')) {
        displayMenu();
    }
    else if (target.matches('.about-btn')) {
        displayAbout();
    }
    else if (target.matches('.contact-btn')) {
        displayContact();
    }
    else return;

});

