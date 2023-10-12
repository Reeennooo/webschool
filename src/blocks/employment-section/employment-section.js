import Swiper, { Navigation } from 'swiper'

const screenWidthEmploymentSection = window.outerWidth
let minWidthEmploymentSection = 575.98

function showEmploymentSectionSwiper () {
    if (screenWidthEmploymentSection > minWidthEmploymentSection) {
        let employmentSectionSwiperDesktop = new Swiper(
            '.employment-section__swiper',
            {
                modules: [Navigation],
                loop: false,
                slidesPerView: 'auto',
                effect: 'fade',
                // Navigation arrows
                navigation: {
                    nextEl: '.employment-section__swiper-next',
                    prevEl: '.employment-section__swiper-prev'
                }
            }
        )
    }
}
showEmploymentSectionSwiper()

let employmentCard = document.querySelectorAll('.employment-card')
employmentCard.forEach(el =>
    el.addEventListener('click', () => {
        if (el.classList.contains('employment-card--margin')) {
            el.classList.remove('employment-card--margin')
        } else {
            employmentCard.forEach(child =>
                child.classList.remove('employment-card--margin')
            )
            el.classList.toggle('employment-card--margin')
        }
    })
)
