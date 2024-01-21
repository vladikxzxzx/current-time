// Функція для оновлення часу на сторінці
function updateCurrentTime() {
    // Отримання поточної дати та часу
    const currentTime = dayjs();

    // Отримання елементу, де виводитиметься час
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');

    // Перевірка, чи елемент існує перед оновленням
    if (timeElement) {
        // Виведення поточного часу в елемент
        timeElement.innerText = currentTime.format('HH:mm:ss');
    }
    if (dateElement) {
        // Виведення поточного часу в елемент
        dateElement.innerText = currentTime.format('YYYY-MM-DD');
    }
}

// Оновлення часу при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {
    updateCurrentTime();

    // Оновлення часу кожну секунду (1000 мілісекунд)
    setInterval(updateCurrentTime, 1000);
});