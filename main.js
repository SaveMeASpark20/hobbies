const navbar = document.getElementsByClassName('navbar-link')[0];

const toggleButton = document.getElementsByClassName('toggle-button')[0];

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
})