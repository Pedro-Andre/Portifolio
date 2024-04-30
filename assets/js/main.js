const navIcon = document.querySelector('.nav-mobile-icon');
const navMobile = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('#nav-links');


navIcon.addEventListener('click', () => {
    navMobile.classList.toggle('block');
})

navLinks.forEach(link => link.addEventListener('click', () => {
    navMobile.classList.toggle('block');
}))

