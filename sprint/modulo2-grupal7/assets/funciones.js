


function validar(event) {
    event.preventDefault(); 

    let nombre = document.getElementById('nombre').value;
    let alerta = document.getElementById('alerta');
    if (nombre == null || nombre.length == 0 || /^\s*$/.test(nombre)) {
        alerta.innerHTML = '<p class="alertaError">Debes ingresar un nombre</p>';
    } else {
        alerta.innerHTML = '<p class="alertaExito">Nombre ingresado con exito</p>';
    }

    let correo = document.getElementById('correo').value;
    let alertaCorreo = document.getElementById('alertaCorreo');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        alertaCorreo.innerHTML = '<p class="alertaError">Correo electrónico invalido</p>';
    } else {
        alertaCorreo.innerHTML = '<p class="alertaExito">Correo ingresado con exito</p>';
    }

    let mensaje = document.getElementById('mensaje').value;
    let alertaMensaje = document.getElementById('alertaMensaje');
    if (mensaje == null || mensaje.length == 0 || /^\s*$/.test(mensaje)) {
        alertaMensaje.innerHTML = '<p class="alertaError">Por favor ingresa tu mensaje</p>';
    } else {
        alertaMensaje.innerHTML = '<p class="alertaExito">Hemos recibido tu mensaje</p>';
    }

}

let table = new DataTable('#myTable');

