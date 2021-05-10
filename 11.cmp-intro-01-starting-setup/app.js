const app = Vue.createApp({

});

app.component('friend-contact',{
    template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetail">
    {{ detailsAreVisible ? 'Hide Details':'Show Details' }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
    </li>    
    `,
    data(){
        return{
            detailsAreVisible: false,
            friend:
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'emanuel@localhost.com'
                }

            
        };
    },
    methods: {
        toggleDetail(){
            console.log('ejemplo');
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');