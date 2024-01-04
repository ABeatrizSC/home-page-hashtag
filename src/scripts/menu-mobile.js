function openMenu() {
    document.getElementsByClassName('header__mobile-nav')[0].classList.add('open');
} 

function closeMenu() {
    document.getElementsByClassName('header__mobile-nav')[0].classList.remove('open');
}

const buttonOpenMenu = document.getElementById('closed-menu-icon');
buttonOpenMenu.addEventListener('click', openMenu);

const buttonCloseMenu = document.getElementById('open-menu-icon');
buttonCloseMenu.addEventListener('click', closeMenu);
