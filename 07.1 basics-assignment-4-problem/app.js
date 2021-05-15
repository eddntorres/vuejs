const app = Vue.createApp({
    data (){
        return{
            claseUsuario: '',
            hiddenClass: false,
            visibleClass: true,
            color: 'red'

        };
    },
    methods: {
        addClass(){
            this.hiddenClass = !this.hiddenClass;
            this.visibleClass = !this.visibleClass;

        }
    },

    computed:{
        addClass2(){
            return {
                hidden: this.hiddenClass,
                visible: this.visibleClass
            }
        }

    }

});

app.mount('#assignment');