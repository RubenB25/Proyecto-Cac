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
    if (data) {
      this.producto = data; // Almacenar los detalles del producto
    } else {
      console.error("Los datos del producto no se obtuvieron correctamente.");
    }
  })
  .catch((error) => {
    console.error(error);
  });
    },
});
app2.mount("#app2");
