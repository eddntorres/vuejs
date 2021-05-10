<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide Details': 'Show Details'}}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong> {{friend.phone}}</li>
            <li><strong>Email: </strong>{{friend.email}}</li>
        </ul>
    </li>
</template>

<script>
export default {
   data(){
       return{
           detailsAreVisible: false,
           friend:
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '0123912 12312',
                    email: 'julie@localhost.com'

                }                 
           
       };
   },
   methods:{
       toggleDetails(){
           this.detailsAreVisible = !this.detailsAreVisible;
       }
   }
};
</script>