

const menuBtn = document.getElementById('#menu-btn');
const aContacto = document.querySelector('#a-contacto');
const buscador = document.querySelector('#input-buscador');
const resultado = document.querySelector('.results');

document.addEventListener('DOMContentLoaded', () => {
    let transicionCompletada = true;
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const ul = document.querySelector('ul');
    const menuBtn = document.querySelector('#menu-btn');

    menuBtn.addEventListener('click', () => {
        if (transicionCompletada) {
            transicionCompletada = false; 
            if (header.style.height === '150px') {
                header.style.height = '100vh';
                header.style.transition = '0.4s';
                header.style.zIndex = '9999';
            } else{
                header.style.height = '150px';
                header.style.position = 'relative';
            }
            header.addEventListener('transitionend', () => {
                if (header.style.height === '100vh') {
                    header.style.position = 'fixed';
                }
                transicionCompletada = true;
            }, { once: true });
        }
    });
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
    const header = document.querySelector('.header');
    if (window.innerWidth > 768) {
        header.style.backgroundColor = 'transparent';
        header.style.position = 'relative';
        header.style.height = '150px';
    } else {
        header.style.backgroundColor = 'white';
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

const carrito = document.querySelector("#carrito");     //asignamos a "carrito" el id del aside carrito
const abrir = document.querySelector("#abrir");         //asignamos a "abrir" el id del boton abrir
const cerrar = document.querySelector("#cerrar");       //asignamos a "cerrar" el id del boton cerrar

//Cada vez que se haga click en ABRIR, se le añade "visible" al aside
abrir.addEventListener("click", () => {      
    carrito.classList.add("visible");
    carrito.style.position = "fixed";
    document.body.classList.add("no-scroll");
})

//Cada vez que se haga click en CERRAR, se le remueve "visible" al aside
cerrar.addEventListener("click", () => {
    carrito.classList.remove("visible");
    document.body.classList.remove("no-scroll");
})