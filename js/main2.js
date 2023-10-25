const { createApp } = Vue
createApp({
    data() {
        return {
            url: './js/datos2.json',
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
                    this.datos1=data.ArtHombre


                }
                
                
                
                );
        }
    },
    created(){
        this.fetchdata(this.url)

    }

}).mount('#app')