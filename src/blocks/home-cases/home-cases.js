const tabsBtns = document.querySelectorAll(".home-cases__tabs-head button")
if (tabsBtns.length) {
    const tabsAll = document.querySelectorAll(".home-cases__tab")
    tabsBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            if (btn.classList.contains("active")) return
            tabsBtns.forEach((bbtn) => bbtn.classList.remove("active"))
            btn.classList.add("active")
            tabsAll.forEach((tab) => tab.style.display = "none")
            document.querySelector(".home-cases__tab-" + btn.dataset.tab).style.display = "block"
        })
    })
}
