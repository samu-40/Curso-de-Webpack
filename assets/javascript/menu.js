const menu_screen = document.querySelector('.menu-screen');

document.querySelector('.menu').addEventListener('click', () => {

    menu_screen.classList.add('active');

});

document.querySelector('.close').addEventListener('click', () => {

    menu_screen.classList.remove('active');

});

const links = document.querySelectorAll('#link');

links.forEach(link => {

    link.addEventListener('click', () => {

        menu_screen.classList.remove('active');

    });

});