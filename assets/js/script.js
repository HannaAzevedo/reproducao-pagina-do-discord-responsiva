const nav = document.getElementById('right-menu-mobile');
const btnToggle = document.getElementById('menuHamburguer');
const btnClose = document.getElementById('close');

function expandirMenu() {

    if (window.innerWidth < 1024) {

        nav.classList.toggle('active');

        btnToggle.classList.toggle('disabled');

        btnClose.classList.toggle('active');
        
    } else {
        nav.classList.toggle('');
    }
}

function recolherMenu() {

    if (window.innerWidth < 1024) {

        nav.classList.remove('active');

        btnToggle.classList.toggle('disabled');

        btnClose.classList.toggle('active');

    } else {
        
        nav.classList.toggle('');
    }
}