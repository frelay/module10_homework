// Задание 1
// Получаем элементы
const btn = document.querySelector(".main-btn");
const arrowNoFill = document.querySelector(".main-btn__svg_no-fill");
const arrowFill = document.querySelector(".main-btn__svg_fill");

// Обработчик для кнопки
btn.addEventListener("click", () => {
    arrowNoFill.classList.toggle("hidden");
    arrowFill.classList.toggle("hidden");
});
