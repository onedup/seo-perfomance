const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const body = document.querySelector(".page__body");
const header = body.querySelector(".header");
const headerHeight = header.offsetHeight;

const toggleScroll = () => {
  document.body.classList.toggle('dis-scroll');
}

const toggleMenu = () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');
  overlay.classList.toggle('overlay--active');
  toggleScroll();
}

burger.addEventListener('click', toggleMenu);

menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link--drop')) {
    e.preventDefault();
    const dropdownContainer = e.target.closest('.nav__item').querySelector('.dropdown-container');
    dropdownContainer.classList.add('active');
    toggleScroll();

    if (!burger.classList.contains('burger--active')) {
      overlay.classList.add('overlay--active');
      overlay.style.top = `${headerHeight}px`;
    }

    document.querySelectorAll('.dropdown-container.active').forEach(container => {
      if (container !== dropdownContainer) {
        container.classList.remove('active');
      }
    });
  }

  if (e.target.classList.contains('mobile-back__link')) {
    e.preventDefault();
    e.target.closest('.dropdown-container').classList.remove('active');
  }
});

document.addEventListener('click', (e) => {
  const shouldCloseMenu = e.target.classList.contains('overlay--active') ||
    e.target.classList.contains('dropdown-close') ||
    e.target.classList.contains('header') ||
    e.target.classList.contains('header__container');

  if (shouldCloseMenu) {
    if (burger.classList.contains('burger--active')) {
      toggleMenu();
    }
    document.querySelectorAll('.dropdown-container.active').forEach(container => {
      container.classList.remove('active');
    });
    overlay.classList.remove('overlay--active');
    toggleScroll();
  }
});