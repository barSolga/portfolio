'use strict';

// variables
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const toggleIcon = document.querySelector('.toggleIcon');
const themeButton = document.querySelector('.switch');
const websiteLogo = document.querySelector('.nav__logo');
const navLinks = document.querySelectorAll('.nav__link')

localStorage.setItem('theme', 'theme-light')

// toggle menu function 
const showMenu = () => {
    navMenu.classList.toggle('active');
    toggleIcon.classList.toggle('bxs-grid-alt');
    toggleIcon.classList.toggle('bx-x');
};

// change theme
const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    body.className = themeName;
}

// event listeners
navToggle.addEventListener('click', showMenu);
// nav style on scroll 
window.addEventListener('scroll', () => {
    if(scrollY > 100) {
        nav.classList.add('navScrolled');
    } else {
        nav.classList.remove('navScrolled');
    }
})

navLinks.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleIcon.classList.add('bxs-grid-alt');
        toggleIcon.classList.remove('bx-x');
    });
});

// Theme changer on switch
themeButton.addEventListener('change', () => {
    if(localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        websiteLogo.setAttribute('src', 'assets/img/logo.svg')
    } else {
        setTheme('theme-dark');
        websiteLogo.setAttribute('src', 'assets/img/logo-dark.svg')
    }
  });