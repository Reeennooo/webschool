const homeHeroBlock = document.querySelectorAll(".home-hero__right")

if (homeHeroBlock.length) {
    window.addEventListener("load", () => homeHeroBlock[0].classList.add("visible"))
}


if (document.getElementsByClassName("home-hero__form").length) {
    document.getElementsByClassName("home-hero__form")[0].addEventListener("submit", function(e) {
        e.preventDefault();
        const site = document.querySelector(".home-hero__form .site")
        const phone = document.querySelector(".home-hero__form .phone")

        if (site.value.length > 1) {
            site.parentNode.classList.remove("wrong")
        } else {
            site.parentNode.classList.add("wrong")
        }

        if (phone.value.length > 1) {
            phone.parentNode.classList.remove("wrong")
        } else {
            phone.parentNode.classList.add("wrong")
        }
        if (!document.querySelector(".home-hero__form .wrong")) {

            const formData = {
                site: site.value,
                phone: phone.value
            }

            console.log("submit form", formData);

            // courseReq.open("POST", apiURL + '/integration/order')
            // courseReq.setRequestHeader("Accept", `application/json`)
            // courseReq.setRequestHeader("Content-Type", `application/json`)
            // courseReq.send(JSON.stringify(formData))
            // courseReq.onload = (data) => {
            //     console.log("data", data);
            // }
        }
    })
}
