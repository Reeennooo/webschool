if (document.getElementsByClassName("order-modal__form").length) {
    document.getElementsByClassName("order-modal__form")[0].addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.querySelector(".order-modal__form .name")
        const phone = document.querySelector(".order-modal__form .phone")

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
        if (!document.querySelector(".order-modal__form .wrong")) {

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
