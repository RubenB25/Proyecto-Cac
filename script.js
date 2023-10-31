

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