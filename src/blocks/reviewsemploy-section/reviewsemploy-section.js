import Swiper, { Navigation } from 'swiper';
let youlearnSectionListDekstop =
    new Swiper('.reviewsemploy-section__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    effect: 'fade',
    // Navigation arrows
    navigation: {
    nextEl: '.reviewsemploy-section__swiper-next',
    prevEl: '.reviewsemploy-section__swiper-prev',
    },
})

if (document.getElementsByClassName("reviewsemploy-section__swiper").length) {
    youlearnSectionListDekstop;
}

const btnReviewSemploy = document.querySelector('.reviewsemploy-section__swiper-next');

btnReviewSemploy?.addEventListener('click', function(){
    youlearnSectionListDekstop.slideNext()
});
