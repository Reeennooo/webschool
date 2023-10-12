
import Swiper, { Navigation } from 'swiper';
import { initMobileSwiper } from '../../js/mobileSwiper';

if (document.querySelectorAll('.youlearn-section__list')?.length) {
  initMobileSwiper('.youlearn-section__list', {
      modules: [Navigation],
      loop: false,
      slidesPerView: "auto",
      navigation: {
      nextEl: '.youlearn-section__next',
      },
  }, 1295)
}

