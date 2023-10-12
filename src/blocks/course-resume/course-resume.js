let hideSkills = document.querySelectorAll(".resume__hideskill");
let showSkill = document.querySelector(".resume__show");

let hiddenHeight = 0;

if (hideSkills.length) {
    showSkill.addEventListener("click", () => {
        hideSkills.forEach((el) => {
            el.classList.toggle("resume__hideskill_show")
        })
    })
}
