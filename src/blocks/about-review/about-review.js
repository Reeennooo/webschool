import Swiper, { Navigation } from 'swiper';

const aboutReviewSwiper = new Swiper('.about-review__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
      nextEl: '.about-review__swiper-next',
    //   prevEl: '.swiper-button-prev',
    },
  });
