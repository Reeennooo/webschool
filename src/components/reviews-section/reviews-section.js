import Swiper, { Navigation } from 'swiper';

const reviewsSwiper = new Swiper('.reviews-section__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-section__swiper-next',
    //   prevEl: '.swiper-button-prev',
    },
  });
