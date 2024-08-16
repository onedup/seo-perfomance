import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

Swiper.use([Autoplay]);
const companiesSlider = new Swiper('.companies__swiper', {
  slidesPerView: 'auto',
  loop: true,
  speed: 5000,
  spaceBetween: 130,
  allowTouchMove: false,
  loopFillGroupWithBlank: true,
  autoplay: {
    enabled: true,
    delay: 1,
  },
});

const companiesSliderRevert = new Swiper('.companies__swiper-revert', {
  slidesPerView: 'auto',
  loop: true,
  speed: 5000,
  spaceBetween: 130,
  allowTouchMove: false,
  loopFillGroupWithBlank: true,
  autoplay: {
    enabled: true,
    delay: 1,
    reverseDirection: true,
  },
});