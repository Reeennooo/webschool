const { default: Swiper, Navigation } = require("swiper");

const solutionSwiper = new Swiper('.service-solution__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.service-solution__swiper-next',
    //   prevEl: '.swiper-button-prev',
    },
});
