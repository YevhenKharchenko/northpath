import Swiper from 'swiper';
import 'swiper/css/bundle';

let reviewsSwiper;

reviewsSwiper = new Swiper('.reviews-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 16,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  watchOverflow: true,
  breakpoints: {
    1440: {
      centeredSlides: false,
      allowTouchMove: false,
      grabCursor: false,
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  on: {
    init(swiper) {
      document.querySelector('.reviews-swiper-container').classList.add('show');
    },
  },
});
