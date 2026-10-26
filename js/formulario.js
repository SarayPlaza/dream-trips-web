document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContacto');
    if (!form) return;

    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const okNombre = validarNombre();
        const okApellidos = validarApellidos();
        const okEmail = validarEmail();
        const okTelefono = validarTelefono();

        if (okNombre && okApellidos && okEmail && okTelefono) {
            alert('¡Formulario enviado correctamente! Nos pondremos en contacto pronto.');
            form.reset();
            limpiarErrores();
        }
    });

    form.addEventListener('reset', function () {
        setTimeout(() => limpiarErrores(), 0);
    });

    nombre.addEventListener('input', validarNombre);
    apellidos.addEventListener('input', validarApellidos);
    email.addEventListener('input', validarEmail);
    telefono.addEventListener('input', validarTelefono);
});

function mostrarError(idError, mensaje) {
    const el = document.getElementById(idError);
    el.textContent = mensaje;
    el.classList.add('show');
}

function ocultarError(idError) {
    const el = document.getElementById(idError);
    el.textContent = '';
    el.classList.remove('show');
}

function validarNombre() {
    const valor = document.getElementById('nombre').value.trim();
    if (!valor) {
        mostrarError('errorNombre', 'El nombre es obligatorio.');
        return false;
    }
    if (!/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]{3,40}$/.test(valor)) {
        mostrarError('errorNombre', 'El nombre debe tener entre 3 y 40 caracteres y solo puede contener letras y espacios.');
        return false;
    }
    ocultarError('errorNombre');
    return true;
}

function validarApellidos() {
    const valor = document.getElementById('apellidos').value.trim();
    if (!valor) {
        mostrarError('errorApellidos', 'Los apellidos son obligatorios.');
        return false;
    }
    if (!/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]{4,60}$/.test(valor)) {
        mostrarError('errorApellidos', 'Los apellidos deben tener entre 4 y 60 caracteres y solo pueden contener letras y espacios.');
        return false;
    }
    ocultarError('errorApellidos');
    return true;
}

function validarEmail() {
    const valor = document.getElementById('email').value.trim();
    if (!valor) {
        mostrarError('errorEmail', 'El correo electrónico es obligatorio.');
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
        mostrarError('errorEmail', 'El correo debe cumplir con el patrón: usuario@dominio.xxx');
        return false;
    }
    ocultarError('errorEmail');
    return true;
}

function validarTelefono() {
    const valor = document.getElementById('telefono').value.trim();
    if (!valor) {
        mostrarError('errorTelefono', 'El teléfono es obligatorio.');
        return false;
    }
    if (!/^\d{9}$/.test(valor)) {
        mostrarError('errorTelefono', 'El teléfono debe contener exactamente 9 dígitos.');
        return false;
    }
    ocultarError('errorTelefono');
    return true;
}

function limpiarErrores() {
    ['errorNombre', 'errorApellidos', 'errorEmail', 'errorTelefono'].forEach(ocultarError);
}