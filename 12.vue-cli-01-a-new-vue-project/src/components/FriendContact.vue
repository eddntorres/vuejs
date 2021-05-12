<template>
    <li>
        <h2>{{name}}{{isFavorite ? '(Favorite)':''}}</h2>
        <button @click="toggleFavorite"> Friend toggle</button>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide Details': 'Show Details'}}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong> {{phoneNumber}}</li>
            <li><strong>Email: </strong>{{emailAddress}}</li>
        </ul>
    </li>
</template>

<script>
export default {
    // props:[
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    emits:['toggle-favorite'],
    // emits:{
    //     'toggle-favorite': function(id){
    //         if(id){
    //             return true;
    //         }else{
    //             console.warn('id is missing');
    //             return false;
    //         }
    //     }
    
    // },
    props:{
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite:   {
            type: Boolean,
            required: false,
            default: false
            // validator: function(value){
            //     return value === 1  || value === '0';
            // }
        }
    },    
   data(){
       return{
           detailsAreVisible: false
        //    friend:
        //         {
        //             id: 'julie',
        //             name: 'Julie Jones',
        //             phone: '0123912 12312',
        //             email: 'julie@localhost.com'

        //         },
           
       };
   },
   methods:{
       toggleDetails(){
           this.detailsAreVisible = !this.detailsAreVisible;
       },
       toggleFavorite(){
            this.$emit('toggle-favorite',this.id );
        }
   }
};
</script>