document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        const isDarkMode = body.classList.contains('dark-theme');

        // Изменение цветов ссылок и кнопок
        document.querySelectorAll('nav a, button, .footer-content button').forEach(el => {
            el.style.color = isDarkMode ? '#003580' : '#FFFFFF';
        });
    });
});