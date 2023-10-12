import Swiper, { Navigation } from 'swiper';

const caseFactorsSwiper = new Swiper('.case-factors__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
      nextEl: '.case-factors__swiper-next',
    //   prevEl: '.swiper-button-prev',
    },
  });
