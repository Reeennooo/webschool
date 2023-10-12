const selBtns = document.querySelectorAll(".select-block__btn")
const selLinks = document.querySelectorAll(".select-block a")

selBtns.forEach((el) => {
    el.addEventListener("click", function(e) {
        if (!el.parentNode.classList.contains("select-block_link")) e.preventDefault()

        if (el.parentNode.classList.contains("select-open")) {
            el.parentNode.classList.remove("select-open")
        } else {
            el.parentNode.classList.add("select-open")
        }
    })

    document.addEventListener('mouseup', (e) =>{
        if (!el.contains(e.target))	el.parentNode.classList.remove('select-open')
    })
})

selLinks.forEach((el) => {
    if (!el.parentNode.parentNode.classList.contains("select-block_link")) {
        el.addEventListener("click", function(e) {
            e.preventDefault()
            let parentSelect = el.parentNode.parentNode
            parentSelect.classList.remove("select-open")
            parentSelect.querySelector("button").innerText = el.innerText
            parentSelect.querySelector("input").value = el.dataset.val
        })
    }
})
