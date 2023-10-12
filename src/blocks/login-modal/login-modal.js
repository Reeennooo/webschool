if (document.getElementsByClassName("login-modal__form").length) {
    document.getElementsByClassName("login-modal__form")[0].addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.querySelector(".login-modal__form .email")
        const password = document.querySelector(".login-modal__form .password")

        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
        // var successEmail = false;

        if (email.value.length > 1) {
            email.parentNode.classList.remove("wrong")
            if (email.value.search(pattern) == 0) {
                email.parentNode.classList.remove("wrong")
            }
            else {
                email.parentNode.classList.add("wrong")
            }
        } else {
            email.parentNode.classList.add("wrong")
        }

        if (password.value.length > 5) {
            password.parentNode.classList.remove("wrong")
        } else {
            password.parentNode.classList.add("wrong")
        }

        if (!document.querySelector(".login-modal__form .wrong")) {

            const formData = {
                email: email.value,
                password: password.value
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
