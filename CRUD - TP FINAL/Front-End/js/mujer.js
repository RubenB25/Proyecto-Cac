const { createApp } = Vue
createApp({
    data() {
        return {
            url: './js/mujer.json',
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

