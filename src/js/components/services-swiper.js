import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


const servicesSwiper = new Swiper('.services__swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },  
  navigation: {
    nextEl: '.services-swiper-button__next',
    prevEl: '.services-swiper-button__prev',
  },
  breakpoints: {
    1100: {
      slidesPerView: 2,
    }
  }
});

// Получаем ссылки на кнопки
const prevButton = document.querySelector('.services-swiper-button__prev');
const nextButton = document.querySelector('.services-swiper-button__next');

// Функция для обработки нажатия клавиши
function handleKeyDown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    if (this === prevButton) {
      servicesSwiper.slidePrev();
    } else if (this === nextButton) {
      servicesSwiper.slideNext();
    }
  }
}

// Добавляем обработчики событий
prevButton.addEventListener('keydown', handleKeyDown);
nextButton.addEventListener('keydown', handleKeyDown);

// Функция для обновления tabindex
function updateButtonTabIndex() {
  prevButton.setAttribute('tabindex', prevButton.classList.contains('swiper-button-disabled') ? '-1' : '0');
  nextButton.setAttribute('tabindex', nextButton.classList.contains('swiper-button-disabled') ? '-1' : '0');
}

// Обновляем tabindex при инициализации
updateButtonTabIndex();

// Обновляем tabindex при изменении состояния слайдера
servicesSwiper.on('slideChange', updateButtonTabIndex);
servicesSwiper.on('reachBeginning', updateButtonTabIndex);
servicesSwiper.on('reachEnd', updateButtonTabIndex);