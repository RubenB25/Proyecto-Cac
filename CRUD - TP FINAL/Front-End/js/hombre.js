const { createApp } = Vue
createApp({
    data() {
        return {
            url: 'https://rubenb25.pythonanywhere.com/productos',
            error: false,
            datos1: []
           
        }
    },
    methods: {
        fetchdata(url) {
            fetch(url)
                .then(response => response.json())
                .then(  data => {
                    console.log(data),
                    this.datos1=data;


                }
                
                
                
                );
        }
    },
    created(){
        this.fetchdata(this.url)

    }

}).mount('#app')