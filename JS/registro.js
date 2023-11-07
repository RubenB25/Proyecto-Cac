function validateReg() {
  // Verificamos que todos los campos de formulario sean válidos.
  if (document.getElementById("email").value === "") {
    alert("Debe ingresar un email válido.");
    return false;
  }
  
  const email = document.getElementById("email").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    alert("Debe ingresar un email válido.");
    return false;
  }
   
  if (document.getElementById("usuario").value === "") {
    alert("Debe ingresar un nombre de usuario.");
    return false;
  }

  if (document.getElementById("clave").value === "") {
    alert("Debe ingresar una contraseña.");
    return false;
  }

  if (document.getElementById("confirmaClave").value === "") {
    alert("Debe confirmar la contraseña.");
    return false;
  }

  if (document.getElementById("clave").value !== document.getElementById("confirmaClave").value) {
    alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
    return false;
  }

  // La entrada es válida.
  return true;
}

// Al hacer clic en el botón de envío, llamamos a la función de validación.
document.getElementById("submit").addEventListener("click", function() {
  // Solo mostramos las alertas si el usuario hace clic en el botón de envío.
  if (validateReg()) {
    alert("Formulario enviado correctamente.");
  }
});