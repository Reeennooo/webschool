let infolist = document.querySelectorAll(".infolist");
let height = 0;

function showInfo(el){
  if(el.querySelector(".infolist__zeroblock").offsetHeight == height){
    el.querySelector(".infolist__zeroblock").style.height = 0 + "px";
    el.querySelector(".infolist__hiddenpart").style.opacity = "0";
  }
  else {
    el.querySelector(".infolist__btn").classList.add("infolist-btn_open") // Добавления стиля к нажатой кнопке
    el.querySelector(".infolist__zeroblock").style.height = `${height}px`; // Увелечение высоты для нажатого блока
    setTimeout(()=>{ //Появление скрытой информации
    el.querySelector(".infolist__hiddenpart").style.opacity = "1";
  }, 200)
  }
}
// Скрытие уже открытого блока с информацией
function closeOtherInfo(arr){
  arr.forEach((el) => {
    el.querySelector(".infolist__hiddenpart").style.opacity = "0";
    el.querySelector(".infolist__zeroblock").style.height = "0";
  })
}
// Удаление открытого стиля для всех кнопок
function changeBtnStyle(arr){
  arr.forEach((el) => {
    el.querySelector(".infolist__btn").classList.remove("infolist-btn_open")
  })
}

infolist.forEach((el, index, arr) => {
  el.addEventListener("click", () => {
    height = el.querySelector(".infolist__hiddenpart").offsetHeight;
    changeBtnStyle(arr);
    closeOtherInfo(arr)
    showInfo(el);
  })
})