import Swiper, { Navigation } from 'swiper';

const reviewsSwiper = new Swiper('.weteach-section__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
      nextEl: '.weteach-section__swiper-next',
      prevEl: '.weteach-section__swiper-prev',
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    breakpoints: {
        992: {
            freeMode: false,
        }
    }
  });
