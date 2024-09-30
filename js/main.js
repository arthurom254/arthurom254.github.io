
function initYr(){
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;
    document.getElementById('years-of-experience').textContent = yearsOfExperience;
}

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});