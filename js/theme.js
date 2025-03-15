// Función para alternar el tema
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    const themeToggleButton = document.getElementById('theme-toggle');

    // Actualizar el texto del botón
    themeToggleButton.textContent = isDark ? 'Cambiar a Tema Claro' : 'Cambiar a Tema Oscuro';

    // Guardar la preferencia en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Cargar el tema guardado al iniciar
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggleButton.textContent = 'Cambiar a Tema Claro';
    } else {
        themeToggleButton.textContent = 'Cambiar a Tema Oscuro';
    }

    // Añadir evento al botón
    themeToggleButton.addEventListener('click', toggleTheme);
});