if (document.querySelectorAll(".openHiddenText").length) {
    document.querySelector(".openHiddenText").addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(".teach-section__collapsed").classList.remove("hidden-text")
    })
}
