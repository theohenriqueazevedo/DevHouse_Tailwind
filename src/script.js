const menuMobile = document.querySelector('#menu');
const btnClose = document.querySelector('#btn-close');
const btnOpen = document.querySelector('#btn-open');
const btnTop = document.getElementById('btn-top');

function openMenu(params) {
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('flex');
}

function closeMenu(params) {
    menuMobile.classList.remove('flex');
    menuMobile.classList.add('hidden');
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btnTop.classList.remove('hidden');
  } else {
    btnTop.classList.add('hidden');
  }
});

// Rolagem suave ao topo ao clicar
btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});