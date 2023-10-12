if (document.getElementsByClassName("findcourse-section__form").length) {
    document.getElementsByClassName("findcourse-section__form")[0].addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.querySelector(".findcourse-section__form .name")
        const phone = document.querySelector(".findcourse-section__form .phone")

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
        if (!document.querySelector(".findcourse-section__form .wrong")) {

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

// Удалять wrong с инпута при вводе в него чего-либо
let allInputs = document.getElementsByTagName("input")
Array.from(allInputs).find(node => node.addEventListener("input", function() {
    this.parentNode.classList.remove("wrong")
}));
