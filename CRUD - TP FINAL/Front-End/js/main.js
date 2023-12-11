document.getElementById("header").innerHTML = `
<nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="./img/Logo.png" width="56px" alt="Inicio">
            </a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html" aria-current="page">Inicio<span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="productos.html">Productos</a>                       
                        </div>
                    </li>
                </ul>
                <form class="d-flex my-2 my-lg-0">
                    <input class="form-control me-sm-2" type="text" placeholder="Buscar">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
      </div>
    </nav>
    `

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