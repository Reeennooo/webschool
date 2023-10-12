const mainHeroBlock = document.querySelectorAll(".main-hero__block")

if (mainHeroBlock.length) {
    window.addEventListener("load", () => mainHeroBlock[0].classList.add("visible"))
}
