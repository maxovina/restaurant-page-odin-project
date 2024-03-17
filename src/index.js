import './style.css';
import mainPage from './mainPage.js';
import menuPage from './menuPage.js';

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const content = document.querySelector('.content');

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    mainPage();
});

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    menuPage();
});

mainPage();