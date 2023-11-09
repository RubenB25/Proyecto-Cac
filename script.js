

const aContacto = document.querySelector('#a-contacto');
const buscador = document.querySelector('#input-buscador');
const resultado = document.querySelector('.results');

const ulMenu = document.querySelector(".ul-menu");
const menuBtn = document.querySelector("#menu-btn"); // Reemplaza "#menuBtn" con el selector correcto para tu botón
const header = document.querySelector('.header');

let transicionCompletada = true; // Asegúrate de que transicionCompletada esté definida

menuBtn.addEventListener('click', () => {
    if (transicionCompletada) {
        transicionCompletada = false;

        if (header.style.height === '150px') {
            header.style.height = '100vh';
            header.style.transition = '0.4s';
           
            header.style.zIndex = '9999';
            setTimeout(()=>{
                menuBtn.classList.add('menu-opened');
            ulMenu.style.display="flex";
        },200);

        } else {
            header.style.height = '150px';
            header.style.position = 'relative';
            ulMenu.style.display = "none"; // Oculta la lista al cerrar el menú
            menuBtn.classList.remove('menu-opened'); // Remueve la clase para restaurar el aspecto original del botón
        }

        header.addEventListener('transitionend', () => {
            if (header.style.height === '100vh') {
                header.style.position = 'fixed';
            }
            transicionCompletada = true;
        }, { once: true });
    }
});
aContacto.addEventListener('click', () => {
    const cajaDirec = document.querySelector('.caja-direccion');
    setTimeout(() => {
        cajaDirec.style.backgroundColor = 'gray';
        cajaDirec.style.transition = '0.5s';
    }, 600);
    setTimeout(() => {
        cajaDirec.style.backgroundColor = '#353031';
        cajaDirec.style.transition = '0.5';
    }, 2000);
}
);

window.addEventListener('resize', () => {
    
    const btnHeader = document.querySelector("#menu-btn"); 
    const header = document.querySelector('.header');
    if (window.innerWidth > 768) {
        header.style.backgroundColor = 'transparent';
        header.style.position = 'relative';
        header.style.height = '150px';
        ulMenu.style.display= "none";
    } else {
        header.style.backgroundColor = 'white';
        btnHeader.style.backgroundImage = "linear-gradient(to bottom, rgba(250, 207, 216, 0.854), rgba(255, 230, 235, 0.905)";
    }
});
buscador.addEventListener('input', () => {
    if (buscador.value === "") {
        resultado.style.display = 'none'; 
    } else {
        resultado.style.display = 'block'; 
        
    }
});

document.addEventListener('click', (event) => {
    if(!buscador.contains(event.target)&& !resultado.contains(event.target)){
        resultado.style.display = 'none'; 
    }
   
});

document.addEventListener('DOMContentLoaded', () => {
    const inputBuscador = document.getElementById("input-buscador");

    inputBuscador.addEventListener('input', () => {
    

    });
});

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