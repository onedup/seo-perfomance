const body = document.querySelector(".page__body");
const header = body.querySelector(".header");
const headerContainer = header.querySelector(".header__container");
const headerHeight = header.offsetHeight;

if (body) {
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance >= headerHeight) {
      header.classList.add("header--fixed");
      body.style.marginTop = `${headerHeight}px`;
    } else {
      header.classList.remove("header--fixed");
      body.style.marginTop = null;
    }
  })
}