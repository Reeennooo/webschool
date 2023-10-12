import Swiper, { Navigation } from 'swiper';

const teachersSwiper = new Swiper('.teachers-section__swiper-section', {
    modules: [Navigation],
    loop: false,
    slidesPerView: 1,
    effect: 'fade',
    // Navigation arrows
    navigation: {
      nextEl: '.teachers-section__swiper-next_sect',
      prevEl: '.teachers-section__swiper-prev_sect',
    },
    on: {
        slideChangeTransitionEnd: function () {
            // Переход к соответствующему слайду в модалке
            teachersSwiperModal.slideTo(this.activeIndex)
        },
      },
  });

const teachersSwiperModal = new Swiper('.teachers-section__swiper-modal', {
    modules: [Navigation],
    loop: false,
    slidesPerView: 1,
    effect: 'fade',
    // Navigation arrows
    navigation: {
      nextEl: '.teachers-section__swiper-next_modal',
      prevEl: '.teachers-section__swiper-prev_modal',
    },
  });
