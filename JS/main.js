function validateForm() {
    // Verificamos que el nombre de usuario no esté vacío.
    if (document.getElementById("username").value === "") {
      alert("Debe ingresar un nombre de usuario.");
      return false;
    }
  
    // Verificamos que la contraseña no esté vacía.
    if (document.getElementById("password").value === "") {
      alert("Debe ingresar una contraseña.");
      return false;
    }
  
    // La entrada es válida.
    return true;
  }
 
  // Al hacer clic en el botón de envío, llamamos a la función de validación.
  document.getElementById("submit").addEventListener("click", validateForm);
  
/*
  // Al hacer clic en el botón de envío, llamamos a la función de validación.
document.getElementById("submit").addEventListener("click", function() {
  // Solo mostramos los alertas si el usuario hace clic en el botón de envío.
  if (validateForm()) {
    alert("Formulario enviado correctamente.");
  }
});*/
