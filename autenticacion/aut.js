// Credenciales predefinidas (en una aplicación real, esto debería estar en el servidor)
const validUsername = 'usuario';
const validPassword = 'contraseña';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Validar credenciales
    if (username === validUsername && password === validPassword) {
        message.textContent = '¡Inicio de sesión exitoso!';
        message.style.color = 'green';
        // Redirigir o hacer algo después de un inicio de sesión exitoso
        setTimeout(() => {
            window.location.href = 'dashboard.html'; // Ejemplo de redirección a una página de inicio después de iniciar sesión
        }, 1000);
    } else {
        message.textContent = 'Usuario o contraseña incorrectos.';
    }
});