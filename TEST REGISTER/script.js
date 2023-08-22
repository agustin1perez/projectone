document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

    // Aquí podrías realizar acciones como enviar los datos a un servidor utilizando AJAX.

    alert("¡Registro exitoso para " + nombre + "!");
});