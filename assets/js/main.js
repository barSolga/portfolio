'use strict';

// variables
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const toggleIcon = document.querySelector('.toggleIcon');
const themeButton = document.querySelector('.switch');
const websiteLogo = document.querySelector('.nav__logo');
const navLinks = document.querySelectorAll('.nav__link');
const projectBox = document.querySelector('.projects__elem');


// set default website theme
localStorage.setItem('theme', 'theme-light')

// Get page url
const url = window.location.toString();
const siteURL = url.substring(0, url.lastIndexOf("/"));

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



// Loading projects data on page
fetch(`${siteURL}/assets/data/projects.json`)
    .then(response => response.json())
    .then(response => {

        const wrapper = document.querySelector('.projects__box');
        
        // adding all projects form json file
        for (let i = 0; i < response.project.length; i++) {
            const project = projectBox.content.cloneNode(true);

            project.querySelector('.projects__elem-image').setAttribute('src', response.project[i].image);
            project.querySelector('.projects__elem-title').textContent = `${response.project[i].name}`;
            project.querySelector('.projects__elem-link1').setAttribute('href', response.project[i].live);
            project.querySelector('.projects__elem-link2').setAttribute('href', response.project[i].github);
            
            wrapper.appendChild(project)
        }

    })

    // TODO write catch for api
    // .catch(() => {
        

    //     warning.innerHTML = 'Wystąpił problem z załadowaniem produktów na naszej stronie!<br><span>Skontaktuj się z nami w celu otrzymania katalogu.</span>';
    //     imgWarning.style.display = 'block';
    // });
    // 



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