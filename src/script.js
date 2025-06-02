const menuMobile = document.querySelector('#menu');
const btnClose = document.querySelector('#btn-close');
const btnOpen = document.querySelector('#btn-open');

function openMenu(params) {
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('flex');
}

function closeMenu(params) {
    menuMobile.classList.remove('flex');
    menuMobile.classList.add('hidden');
}