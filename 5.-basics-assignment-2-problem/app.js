const app= Vue.createApp({
    data(){
        return {
            inputValue: '',
            inputValue2:''
        };
    },
    methods: {
        clickAlert(){
            alert('Alerta');
        },
        inputChange(event){
            this.inputValue = event.target.value;
        },
        inputChange2(event){
            this.inputValue2 = event.target.value;
        }        
    }
});


app.mount('#assignment');