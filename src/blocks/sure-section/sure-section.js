if (document.querySelectorAll(".sureOpenHiddenText").length) {
  document.querySelector(".sureOpenHiddenText").addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(".sure-section__left").classList.remove("sure__hiden-text")
  })
}
