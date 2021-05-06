const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'ejemplo',
      confirmedName: ''
    };
  },
  methods: {
    add(num){
      this.counter= this.counter + num;
    },
    rest(num){
      if(this.counter>0){
        this.counter= this.counter - num;
      }
    },
    setName(event, nombre){
      this.name =  event.target.value + ' ' + nombre;
    },
    submitForm(){
      
      alert('submitted');

    },
    confirmInput(){
      this.confirmedName = this.name

    }
  }
});

app.mount('#events');
