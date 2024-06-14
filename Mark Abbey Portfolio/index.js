Selection = document.querySelectorAll('section');
navlinks = document.querySelectorAll('header navbar a');

const burgermenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgermenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});