const app= Vue.createApp({
    data(){
        return{
            counter: 0

        }
    },
    methods: {
        addFive(num){
            this.counter = this.counter + num;
        },
        addOne(num){
            this.counter = this.counter + num;
        }
    },
    computed:{
        calculate(){
            if(this.counter === 37){
                return this.counter;
            }else if(this.counter < 37){
                return "Not there yet";
            }else if(this.counter > 37){
                return "Too much!";

            }
        
        }

    },

    watch:{
        calculate() {
            console.log('watcher executing');
            const that = this;
            setTimeout( function(){
                that.number=0;
            },5000);
        }

    }

});

app.mount('#assignment')