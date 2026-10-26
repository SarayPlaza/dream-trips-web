document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContacto');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validarFormulario()) {
                alert('¡Formulario enviado correctamente! Nos pondremos en contacto pronto.');
                form.reset();
                limpiarErrores();
            }
        });
    }
});

function validarFormulario() {
    let esValido = true;

    // Validaciones: 


    // nombre
    
    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById('errorNombre');
    
    if (!nombre) {
        errorNombre.textContent = 'El nombre es obligatorio.';
        errorNombre.classList.add('show');
        esValido = false;
    } else if (!/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]{3,40}$/.test(nombre)) {
        errorNombre.textContent = 'El nombre debe tener entre 3 y 40 caracteres y solo puede contener letras y espacios.';
        errorNombre.classList.add('show');
        esValido = false;
    } else {
        errorNombre.classList.remove('show');
    }

    // apellidos:

    const apellidos = document.getElementById('apellidos').value.trim();
    const errorApellidos = document.getElementById('errorApellidos');
    
    if (!apellidos) {
        errorApellidos.textContent = 'Los apellidos son obligatorios.';
        errorApellidos.classList.add('show');
        esValido = false;
    } else if (!/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]{4,60}$/.test(apellidos)) {
        errorApellidos.textContent = 'Los apellidos deben tener entre 4 y 60 caracteres y solo pueden contener letras y espacios.';
        errorApellidos.classList.add('show');
        esValido = false;
    } else {
        errorApellidos.classList.remove('show');
    }

    // mail

    const email = document.getElementById('email').value.trim();
    const errorEmail = document.getElementById('errorEmail');
    
    if (!email) {
        errorEmail.textContent = 'El correo electrónico es obligatorio.';
        errorEmail.classList.add('show');
        esValido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorEmail.textContent = 'El correo debe cumplir con el patrón: usuario@dominio.xxx';
        errorEmail.classList.add('show');
        esValido = false;
    } else {
        errorEmail.classList.remove('show');
    }

    // telefono

    const telefono = document.getElementById('telefono').value.trim();
    const errorTelefono = document.getElementById('errorTelefono');
    
    if (!telefono) {
        errorTelefono.textContent = 'El teléfono es obligatorio.';
        errorTelefono.classList.add('show');
        esValido = false;
    } else if (!/^\d{9}$/.test(telefono)) {
        errorTelefono.textContent = 'El teléfono debe contener exactamente 9 dígitos.';
        errorTelefono.classList.add('show');
        esValido = false;
    } else {
        errorTelefono.classList.remove('show');
    }

    return esValido;
}

function limpiarErrores() {
    const errores = document.querySelectorAll('.invalid-feedback');
    errores.forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });
}