import Swiper, { Navigation } from 'swiper';

const aboutTeamSwiper = new Swiper('.about-team__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
      nextEl: '.about-team__swiper-next',
    //   prevEl: '.swiper-button-prev',
    },
  });
