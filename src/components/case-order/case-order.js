if (document.getElementsByClassName("case-order__form").length) {
    document.getElementsByClassName("case-order__form")[0].addEventListener("submit", function(e) {
        e.preventDefault();
        const site = document.querySelector(".case-order__form .site")
        const name = document.querySelector(".case-order__form .name")
        const phone = document.querySelector(".case-order__form .phone")

        if (site.value.length > 1) {
            site.parentNode.classList.remove("wrong")
        } else {
            site.parentNode.classList.add("wrong")
        }

        if (name.value.length > 1) {
            name.parentNode.classList.remove("wrong")
        } else {
            name.parentNode.classList.add("wrong")
        }

        if (phone.value.length > 1) {
            phone.parentNode.classList.remove("wrong")
        } else {
            phone.parentNode.classList.add("wrong")
        }
        if (!document.querySelector(".case-order__form .wrong")) {

            const formData = {
                site: site.value,
                name: name.value,
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

if (document.getElementsByClassName("about-order__form").length) {
    document.getElementsByClassName("about-order__form")[0].addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.querySelector(".about-order__form .name")
        const phone = document.querySelector(".about-order__form .phone")

        if (name.value.length > 1) {
            name.parentNode.classList.remove("wrong")
        } else {
            name.parentNode.classList.add("wrong")
        }

        if (phone.value.length > 1) {
            phone.parentNode.classList.remove("wrong")
        } else {
            phone.parentNode.classList.add("wrong")
        }
        if (!document.querySelector(".about-order__form .wrong")) {

            const formData = {
                name: name.value,
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
