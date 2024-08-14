import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


const servicesSwiper = new Swiper('.services__swiper', {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.services-swiper-button__next',
    prevEl: '.services-swiper-button__prev',
  },
});