const { createApp } = Vue;
const app1 = createApp({
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
          window.location.href = `product-view.html?id=${productoId}`;
   
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

