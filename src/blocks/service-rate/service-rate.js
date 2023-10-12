const { default: Swiper, Navigation } = require("swiper");

const rateSwiper = new Swiper('.service-rate__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.service-rate__swiper-next',
    //   prevEl: '.swiper-button-prev',
    },
});
