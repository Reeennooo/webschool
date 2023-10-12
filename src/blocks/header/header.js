import { triplets } from "../../js/global-scripts"

document.getElementsByClassName("openMenu")[0]
    .addEventListener("click", function (e) {
        e.preventDefault()
        if (this.classList.contains("open")) {
            this.classList.remove("open")
            document.getElementsByClassName("header__menu")[0].classList.remove("header__menu_open")
            window.noScroll.enableScroll()
        } else {
            this.classList.add("open")
            document.getElementsByClassName("header__menu")[0].classList.add("header__menu_open")
            window.noScroll.disableScroll()
        }
})
document.getElementsByClassName("header__menu-overlay")[0]
    .addEventListener("click", function (e) {
        document.getElementsByClassName("openMenu")[0].classList.remove("open")
        document.getElementsByClassName("header__menu")[0].classList.remove("header__menu_open")
        window.noScroll.enableScroll()
    })

function mobMenuToggle (e) {
    e.preventDefault()
    const mobMenu = document.querySelector(".mobMenu")
    if (mobMenu.classList.contains("mobMenu_open")) {
        mobMenu.classList.remove("mobMenu_open")
        window.noScroll.enableScroll()
    } else {
        mobMenu.classList.add("mobMenu_open")
        window.noScroll.disableScroll()
    }
}

document.querySelector(".header__burger").addEventListener("click", mobMenuToggle)
document.querySelector(".mobMenu__close").addEventListener("click", mobMenuToggle)

window.addEventListener("resize", () => {
    const mobMenu = document.querySelector(".mobMenu")
    const headerMenu = document.querySelector(".header__menu")
    if (window.innerWidth > 1199 && mobMenu.classList.contains("mobMenu_open")){
        mobMenu.classList.remove("mobMenu_open")
        window.noScroll.enableScroll()
    } else if (window.innerWidth < 1200 && headerMenu.classList.contains("header__menu_open")) {
        headerMenu.classList.remove("header__menu_open")
        window.noScroll.enableScroll()
    }
})

// Фикс высоты модалок для айфона
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

const stringCount = (start, end, targetEl,  time, dataIncrement)=> {
    let currentResult = Number(start);
    let interval = setInterval(function () {
      currentResult = Number(currentResult) + Number(dataIncrement);
      if (currentResult<=end) {
        if(targetEl.dataset.float){
          targetEl.innerHTML = currentResult<targetEl.dataset.deciamal && targetEl.dataset.deciamal? "0"+currentResult : currentResult.toFixed(1);
        }else{
          targetEl.innerHTML = currentResult<targetEl.dataset.deciamal && targetEl.dataset.deciamal? "0"+currentResult : currentResult;
        }
      }else{
        targetEl.innerHTML = end
        clearInterval(interval)
      };
  }, time*10);}

// Счетчики
const countedEls = document.querySelectorAll(".countRise")

const countRise = (elem) => {
    const wHeight = document.documentElement.clientHeight,
        sHeight = document.documentElement.scrollTop,
        posEl = elem.getBoundingClientRect().top + wHeight/3,
        halfScreenScroll = sHeight,
        number = Number(elem.dataset.num),
        increment = Number(elem?.dataset?.increment ?? 1),
        delay = Number(elem?.dataset?.delay ?? 0),
        speed = Number(elem.dataset.speed)
    let currentResult = 0;

    if (posEl < wHeight && !elem.classList.contains("counted")) {
        elem.classList.add("counted")
        setTimeout(() => {
            let interval = setInterval(function () {
                currentResult = Number(currentResult) + increment;
                if (currentResult<=number) {
                    elem.innerHTML = triplets(currentResult);
                } else {
                    elem.innerHTML = triplets(number)
                    clearInterval(interval)
                };
            }, speed/number);
        }, delay);

    }
}

if (countedEls.length) {
    countedEls.forEach((el) => {
        el.innerHTML = "0"
    })

    document.addEventListener("scroll", function () {
        countedEls.forEach((el) => {
            countRise(el)
        })
    })
}

let multiBlockAll = document.querySelectorAll(".multiBlock")

if (multiBlockAll.length) {
    document.addEventListener("scroll", () => {
        multiBlockAll.forEach((el) => {
            const wHeight = document.documentElement.clientHeight,
                // sHeight = document.documentElement.scrollTop,
                posEl = el.getBoundingClientRect().top + wHeight/3
            if (posEl < wHeight) {
                el.classList.add("visible")
            }
        })

    })
}

// parallax page-hero
const allParalBlock = document.querySelectorAll(".course-main__back, .main-hero__back")
if (allParalBlock.length) {
    document.addEventListener("scroll", function () {
        allParalBlock.forEach((el) => {
            el.style.transform = `translateY(${(document.documentElement.scrollTop/5) - 50}px)`
        })
    })
}


