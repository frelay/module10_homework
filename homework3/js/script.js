// Задание 3
// Получаем элементы
const input = document.querySelector(".main-form__input");
const sendBtn = document.querySelector(".main-form__btn_send");
const geolocationBtn = document.querySelector(".main-form__btn_geolocation");
const messages = document.querySelector(".messages");

// Сервер
const url = "wss://echo-ws-service.herokuapp.com";

// Функция рисует блок с сообщением
function addMessage(message, className) {
    if (message) {
        let messageBlock = document.createElement("div");
        messageBlock.classList.add("messages__message-text", className);
        messageBlock.innerHTML = message;
        messages.appendChild(messageBlock);
    }
}

// Функция, выводящая текст об ошибке при получении геолокации
function error() {
    addMessage(
        "Невозможно получить ваше местоположение",
        "messages__sender-message"
    );
}

// Функция, срабатывающая при успешном получении геолокации
function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    addMessage(
        `<a class="messages__link" target="_blank" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Гео-локация</a>`,
        "messages__sender-message"
    );
}

// Обработчик для кнопки Отправить
sendBtn.addEventListener("click", () => {
    addMessage(input.value, "messages__sender-message");
    websocket = new WebSocket(url);
    websocket.addEventListener("open", () => {
        websocket.send(input.value);
        websocket.addEventListener("message", (event) => {
            addMessage(event.data, "messages__server-message");
        });
    });
});

// Обработчик для кнопки Гео-локация
geolocationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
        addMessage(
            "Geolocation не поддерживается вашим браузером",
            "messages__sender-message"
        );
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
        websocket = new WebSocket(url);
        websocket.addEventListener("open", () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { coords } = position;
                websocket.send(
                    `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`
                );
            });
        });
    }
});
