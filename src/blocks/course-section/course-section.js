import Swiper, { Navigation } from 'swiper';
import { initMobileSwiper } from '../../js/mobileSwiper';

if (document.querySelectorAll('.course-section__grid')?.length) {
    initMobileSwiper('.course-section__grid', {
        modules: [Navigation],
        loop: false,
        slidesPerView: "auto",
        navigation: {
        nextEl: '.course-section__next',
        },
    }, 991)
}
