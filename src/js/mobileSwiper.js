import Swiper from 'swiper';

export function initMobileSwiper (sliderSelector, options, width) {
    const slider = document.querySelector(sliderSelector);

    // let mySwiper = new Swiper(slider, {
    // 	slidesPerView: 3,
    // 	spaceBetween: 10,
    // 	loop: true,
    // 	pagination: {
    // 		el: '.swiper-pagination',
    // 		clickable: true,
    // 	},
    // 	navigation: {
    // 		nextEl: '.swiper-button-next',
    // 		prevEl: '.swiper-button-prev',
    // 	},
    // })

    let mySwiper;

    function mobileSlider() {
        if (window.innerWidth <= width && slider.dataset.mobile == 'false') {
            mySwiper = new Swiper(slider, options);

            slider.dataset.mobile = 'true';
        }

        if (window.innerWidth > width) {
            slider.dataset.mobile = 'false';
            if (slider.classList.contains('swiper-container-initialized')) {
                mySwiper.destroy();
            }
        }
    }

    mobileSlider()

    window.addEventListener('resize', () => {
        mobileSlider();
    });
}
