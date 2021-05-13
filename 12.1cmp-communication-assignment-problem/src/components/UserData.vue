<template>
    <form @submit.prevent="updateData">    
        <input v-model="newName" type="text" placeholder="name">
        <input v-model="newAge" type="text" placeholder="age">
        <button type="submit">ENVIAR</button>  
    </form>
</template>

<script>
export default {
    emits:['update-data'],
    data(){
        return{
            newName: '',
            newAge: 0
        }
    },
    methods:{
        updateData(){
            this.$emit('update-data',this.newName, this.newAge);
        }
    }
}
</script>