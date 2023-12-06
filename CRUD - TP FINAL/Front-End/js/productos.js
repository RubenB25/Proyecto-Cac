const { createApp } = Vue;

    createApp({
        data() {
            return {
                productos:[],

                url:'https://rubenb25.pythonanywhere.com/productos',
                error: false,
                cargando: true
            }    
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.productos = data;
                        this.cargando = false;
                    })
                    .catch(err => {
                        console.error(err);
                        this.error = true;              
                    });
            },
            eliminar(id) {
                const url = this.url+'/' + id;
                var options = {
                    method: 'DELETE',
                };
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                 alert('Registro Eliminado')
                        location.reload(); // recarga el json luego de eliminado el registro
                    });
            },
            grabar(){
                let producto = {
                    nombre: this.nombre,
                    precio: this.precio,
                    descripcion: this.descripcion,
                    stock: this.stock,
                    color : this.color,
                    talle : this.talle,
                    categoria : this.categoria,
                    imagen: this.imagen
                };
                var options = {
                    body: JSON.stringify(producto),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow',
                };
                fetch(this.url, options)
                    .then(function () {
                        alert("Registro grabado")
                        window.location.href = "./productos.html";  // recarga productos.html
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Grabar", err)  // puedo mostrar el error tambien
                    });      
            },
        },
        created() {
            this.fetchData(this.url);
        },    
    }).mount('#app');