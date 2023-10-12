const aboutHeroBlock = document.querySelectorAll(".about-hero .about-hero__right")

if (aboutHeroBlock.length) {
    window.addEventListener("load", () => aboutHeroBlock[0].classList.add("visible"))
}
