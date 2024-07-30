document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === '' || password === '') {
        message.textContent = 'Por favor, complete todos los campos.';
    } else {
        message.textContent = '¡Inicio de sesión exitoso!';
        message.style.color = 'green';

    }
});