
  const { createApp } = Vue;

createApp({
  data() {
    return {
      url: 'https://653551d5c620ba9358ec623f.mockapi.io/moksha/products/',
      error: false,
      sexo: ['Mujer', 'Hombre'], // Define las categorías disponibles
      sexoSeleccionado: 'Mujer', // Inicialmente muestra la categoría "Mujer"
      datos: []

    }
  }, computed: {
    // Filtra los datos por la categoría seleccionada
    datosFiltrados() {
      return this.datos.filter(elemento => elemento.sex === this.sexoSeleccionado);
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
          this.datos = data; // Asignar los datos a la propiedad 'datos'
        })
        .catch(error => {
          this.error = true; // Manejar errores si la solicitud falla
          console.error(error);
        });
    }
  },
  created() {
    this.fetchData(this.url);
  }
}).mount('#app')

