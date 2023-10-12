import { Navigation } from 'swiper';
import { initMobileSwiper } from '../../js/mobileSwiper';

if (document.querySelectorAll('.service-seo__swiper')?.length) {
    initMobileSwiper('.service-seo__swiper', {
        modules: [Navigation],
        loop: false,
        slidesPerView: "auto",
        navigation: {
        nextEl: '.service-seo__next',
        },
    }, 1199)
}

