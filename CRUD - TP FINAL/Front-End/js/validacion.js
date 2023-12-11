let redireccionar = false;

function inicioExitoso() {
    const iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click", () => {
        window.location.href = "productos.html";
    });
}

function validar() {
    let usuario = document.getElementById("usuario");
    let clave = document.getElementById("clave");
    let error = false;
    document.getElementById("validar_usuario").innerHTML = "&nbsp;";
    document.getElementById("validar_clave").innerHTML = "&nbsp;";
    
    if (usuario.value == "") {
        document.getElementById("validar_usuario").innerHTML = "Debe completar el usuario";
        error = true;
        usuario.focus();
    }
    
    if (clave.value.length < 8) {
        document.getElementById("validar_clave").innerHTML = "Debe completar la clave con al menos 8 caracteres";
        error = true;
        clave.focus();
    }
    
    if ((usuario.value != "admin" || clave.value != "Admin111") && usuario.value !== "") {
        document.getElementById("validar_clave").innerHTML = "Usuario o clave incorrectos";
        error = true;
        clave.focus();
    }
    
    if (usuario.value === "admin" || clave.value === "Admin111") {
        document.getElementById("usuario").value = "";
        document.getElementById("validar_usuario").innerHTML = "&nbsp;";
        document.getElementById("clave").value = "";
        document.getElementById("validar_clave").innerHTML = "&nbsp;";
        window.location.href = "productos.html"
    }
    
    return !error;
}