const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            valueTask: '',
            toggle: false
        };
    },
    methods: {
        addTask(){
            this.tasks.push(this.valueTask);
        },
        toggleVar(){
            this.toggle = !this.toggle;
        }
    },
    computed: {
        showToggleVar(){
           return this.toggle ? 'Mostrar' : 'Ocultar';
        }
    }
});
app.mount('#assignment');