// Задание 2
// Получаем элементы
btn = document.querySelector(".main-btn");

// Обработчик для кнопки
btn.addEventListener("click", () => {
    // Выводим алерт с размерами экрана
    alert(
        `Размеры девайса/монитора: \nШирина - ${screen.width} \nВысота - ${screen.height} 
        \nРазмеры девайса/монитора c учетом полосы прокрутки: \nШирина - ${window.innerWidth} \nВысота - ${window.innerHeight} 
        \nРазмеры девайса/монитора без учета полосы прокрутки: \nШирина - ${document.documentElement.clientWidth} \nВысота - ${document.documentElement.clientHeight}`
    );
});
