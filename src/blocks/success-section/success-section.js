import Swiper, { Navigation } from 'swiper';

const successSwiper = new Swiper('.success-section__swiper-section', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
      nextEl: '.success-section__swiper-next_sect',
      prevEl: '.success-section__swiper-prev_sect',
    },
    on: {
        slideChangeTransitionEnd: function () {
            // Переход к соответствующему слайду в модалке
            successSwiperModal.slideTo(this.activeIndex)
        },
      },
  });

const successSwiperModal = new Swiper('.success-section__swiper-modal', {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
      nextEl: '.success-section__swiper-next_modal',
      prevEl: '.success-section__swiper-prev_modal',
    },
  });
