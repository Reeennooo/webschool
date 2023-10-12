const caseHeroBlock = document.querySelectorAll(".case-hero__right")

if (caseHeroBlock.length) {
    window.addEventListener("load", () => caseHeroBlock[0].classList.add("visible"))
}
