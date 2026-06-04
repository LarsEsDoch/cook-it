const trigger = document.getElementById('menu-trigger');
const menu = document.getElementById('menu');

trigger.addEventListener('click', (event) => {
    if (window.innerWidth <= 500) {
        event.preventDefault();
        trigger.classList.toggle('active');
        menu.classList.toggle('active');
    }
});

document.addEventListener('click', (event) => {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
        trigger.classList.remove('active');
        menu.classList.remove('active');
    }
});