<template>
    <form @submit.prevent="sendForm">
        <input placeholder="Name" type="text" v-model="name">
        <input placeholder="Phone" type="tel" v-model="phone">
        <input placeholder="Email" type="email" v-model="email">
        <button type="submit">ENVIAR</button>
    </form>
</template>

<script>
export default{
    emits:['send-form'],
    data() {
        return {
                name: '',
                phone: '',
                email: ''
        }
    },
    methods: {
        sendForm(){
            console.log("event emit");
            this.$emit('send-form', this.name, this.phone, this.email );
        }
    },
};
</script>