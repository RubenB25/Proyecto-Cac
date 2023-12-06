// console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1

const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        nombre:"",
        descripcion:"",
        talle:"",
        categoria:"",
        color:"",
        imagen:"",
        stock:0,
        precio:0,
        url:'https://rubenb25.pythonanywhere.com/productos/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.id=data.id
                    this.nombre = data.nombre;
                    this.imagen=data.imagen
                    this.descripcion=data.descripcion
                    this.talle=data.talle
                    this.categoria=data.categoria
                    this.color=data.color
                    this.stock=data.stock
                    this.precio=data.precio                    
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let producto = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                talle: this.talle,
                categoria: this.categoria,
                color: this.color,
                precio: this.precio,
                stock: this.stock,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./productos.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
