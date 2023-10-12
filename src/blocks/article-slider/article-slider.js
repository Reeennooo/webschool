import Swiper, {Navigation} from 'swiper';

  const articleSlider = new Swiper('.article-slider__swiper', {
      modules: [Navigation],
      loop: false,
      slidesPerView: "auto",
      effect: 'fade',
      // Navigation arrows
      navigation: {
      nextEl: '.article-slider-next',
      prevEl: '.article-slider-prev',
      },
  });

