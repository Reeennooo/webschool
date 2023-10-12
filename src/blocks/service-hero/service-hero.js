if (document.getElementsByClassName("service-hero__form").length) {
    document.getElementsByClassName("service-hero__form")[0].addEventListener("submit", function(e) {
        e.preventDefault();
        const site = document.querySelector(".service-hero__form .site")
        const name = document.querySelector(".service-hero__form .name")
        const phone = document.querySelector(".service-hero__form .phone")

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
        if (!document.querySelector(".service-hero__form .wrong")) {

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
