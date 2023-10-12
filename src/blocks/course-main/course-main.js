import Swiper from 'swiper';

const courseMainSwiper = new Swiper('.course-main__swiper', {
    loop: false,
    slidesPerView: "auto",
});

// Анимация при заходе
const courseHeroBlock = document.querySelectorAll(".course-main__right")

if (courseHeroBlock.length) {
    window.addEventListener("load", () => document.querySelector(".course-main__right").classList.add("visible"))
}

