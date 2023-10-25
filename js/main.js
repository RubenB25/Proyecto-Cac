const { createApp } = Vue
createApp({
    data() {
        return {
            url: './js/datos.json',
            error: false,
            datos: []
           
        }
    },
    methods: {
        fetchdata(url) {
            fetch(url)
                .then(response => response.json())
                .then(  data => {
                    console.log(data),
                    this.datos=data.Artículos


                }
                
                
                
                );
        }
    },
    created(){
        this.fetchdata(this.url)

    }

}).mount('#app')
/*const { createApp } = Vue
createApp({
    data() {
        return {
            nombre: "Ana",
            count: 0,
        }
    },
    methods: { // aqui se definen  las funciones del objeto VUE
        agregarFruta() {  // se ejecutara cuando sea llamada desde html
            this.frutas.push({ "fruta": this.frutaAux, "stock": this.cantAux })
            this.cantAux = ""
            this.frutaAux = ""
        },
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.hoteles = data.results.hotels
                })
                .catch(error => alert("Ups... se produjo un error: " + error))
        }
    },
    computed: {   // se ejecutara cada vez que cambie el objeto VUE    
        sumarFrutas() {
            this.totalFrutas = 0
            for (fruta of this.frutas) {
                this.totalFrutas = this.totalFrutas + fruta.stock
            }
            return this.totalFrutas
        }
    },
    created() {    //Se ejecuta cuando se carga el objeto VUE
        this.fetchData(this.url)
    }
}).mount('#app')*/