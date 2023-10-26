
const { createApp } = Vue;
const app1 = createApp({
  el: "#app1",
  data() {
    return {
      productos: [],
      busqueda: "",
      productoSeleccionado: null,
    };
  },
  computed: {
    productosLimitados() {
      const busqueda = this.busqueda.toLowerCase();
      return this.productos
        .filter(producto => producto.name.toLowerCase().includes(busqueda))
        .slice(0, 3);
    },
    
  },
  methods: {
    mostrarProducto(producto) {
      const productoId = producto.id;
          // Redirige a la página del producto con el ID
          window.location.href = `producto.html?id=${productoId}`;
   
    },
  },
  created() {
    const url = "https://653551d5c620ba9358ec623f.mockapi.io/moksha/products/"; 

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo cargar los productos desde la API");
        }
        return response.json();
      })
      .then((data) => {
        this.productos = data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
}); app1.mount("#app1")

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
const { createApp2 } = Vue;
const app2 = createApp({
    data() {
        return {
            producto: null, // Inicializar producto como nulo
        };
    },
    created() {
        // Obtener el ID del producto desde la URL
        const params = new URLSearchParams(window.location.search);
        const productoId = params.get("id");
        const url = `https://653551d5c620ba9358ec623f.mockapi.io/moksha/products/${productoId}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar los detalles del producto desde la API");
                }
                return response.json();
            })
            .then((data) => {
                this.producto = data; // Almacenar los detalles del producto
            })
            .catch((error) => {
                console.error(error);
            });
    },
});
app2.mount("#app2");