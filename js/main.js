const carrito = document.querySelector("#carrito");     //asignamos a "carrito" el id del aside carrito
const abrir = document.querySelector("#abrir");         //asignamos a "abrir" el id del boton abrir
const cerrar = document.querySelector("#cerrar");       //asignamos a "cerrar" el id del boton cerrar

//Cada vez que se haga click en ABRIR, se le añade "visible" al aside
abrir.addEventListener("click", () => {      
    carrito.classList.add("visible");
})

//Cada vez que se haga click en CERRAR, se le remueve "visible" al aside
cerrar.addEventListener("click", () => {
    carrito.classList.remove("visible");
})