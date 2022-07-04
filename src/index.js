import initialLoad from './initialLoad';
import showMenu from './menu';
import showHome from './home';
import showContact from './contact';

initialLoad();

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => showMenu());

const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', () => showHome());

const contactButton = document.getElementById('contact-button');
contactButton.addEventListener('click', () => showContact());