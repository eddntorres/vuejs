<template>
    <user-data @update-data="userUpdateData">
    </user-data>
    <active-user :name="name" :age="age">
    </active-user>
</template>

<script>
import UserData from './components/UserData.vue'
export default {
  components: { UserData },
    data(){
        return{
            name: 'Eduardo',
            age: 24
        }
    },
    methods: {
        userUpdateData(userName, userAge){
            this.name = userName;
            this.age = userAge
        }
    }
}

</script>

