if (document.querySelectorAll(".videoOpen").length) {
    document.querySelectorAll(".videoOpen").forEach((el) => {
       el.addEventListener("click", function (e) {
            document.querySelector(".video-modal .video-modal__wp").innerHTML = `
            <iframe src="${this.getAttribute("href")}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        })
    })

}

