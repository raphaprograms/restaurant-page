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
        home.style.backgroundColor = '#ecd9ba';
        home.style.borderBottomColor = '#fffaf1';
        menu.style.backgroundColor = '#f4f0db';
        about.style.backgroundColor = '#f4f0db';
        contact.style.backgroundColor = '#f4f0db';
    }
    else if (target.matches('.menu-btn')) {
        displayMenu();
        home.style.backgroundColor = '#f4f0db';
        menu.style.backgroundColor = '#ecd9ba';
        menu.style.borderBottomColor = '#fffaf1';
        about.style.backgroundColor = '#f4f0db';
        contact.style.backgroundColor = '#f4f0db';
    }
    else if (target.matches('.about-btn')) {
        displayAbout();
        home.style.backgroundColor = '#f4f0db';
        menu.style.backgroundColor = '#f4f0db';
        about.style.backgroundColor = '#ecd9ba';
        about.style.borderBottomColor = '#fffaf1';
        contact.style.backgroundColor = '#f4f0db';
    }
    else if (target.matches('.contact-btn')) {
        displayContact();
        home.style.backgroundColor = '#f4f0db';
        menu.style.backgroundColor = '#f4f0db';
        about.style.backgroundColor = '#f4f0db';
        contact.style.backgroundColor = '#ecd9ba';
        contact.style.borderBottomColor = '#fffaf1';
    }
    else return;

});

