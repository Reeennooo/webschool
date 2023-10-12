import Swiper, { Navigation } from 'swiper';

const workSwiper = new Swiper('.works-students__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: 1,
    effect: 'fade',
    // Navigation arrows
    navigation: {
      nextEl: '.works-students__swiper-next',
      prevEl: '.works-students__swiper-prev',
    },
  });

// Открытие скрытых пунктов списка
let btnShow = document.querySelectorAll(".show-hidden-ul");

function showHiddenul(el){
  el.forEach((el) => {
    if(el.style.display == "block"){
      el.style.display = "none"
    } else el.style.display = "block";
  })
}

btnShow.forEach((el, index) => {
  el.addEventListener("click", () => {

    let hiddenUl = document.querySelectorAll(`.hiddenul-${index+1}`);
    showHiddenul(hiddenUl);

  })
})
