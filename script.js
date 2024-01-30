const hamburger = document.querySelector('.hamburger');
const navlink = document.querySelector('.nav_link');

hamburger.addEventListener('click', () => {
    navlink.classList.toggle('hide')
});