const { createApp1 } = Vue
createApp({
    data() {
        return {
            url: './js/datos.json',
            error: false,
            datos: {}
           
        }
    },
    methods: {
        fetchdata(url) {
            fetch(url)
                .then(response => response.json())
                .then(  data => {
                    console.log(data),
                    this.datos=data

                }
                
                
                
                );
        }
    },
    created(){
        this.fetchdata(this.url)

    }

}).mount('#app')
