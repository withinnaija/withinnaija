const navMenu = document.querySelector('#navbar');
const toggleMenu = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});


window.onscroll.addEventListener(() => {
    close.classList.remove(show);
})
