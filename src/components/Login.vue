<template>
    <div>
        <h1>Welcome to vue router!!!</h1>
        <input type="text" v-model= "inputText">
        <button @click="toWelcome">确定</button>
    </div>
    <!-- <router-view/> -->
</template>

<script>
export default {
    name:'login',
    data:function(){
        return {
             inputText:""
        }
    },
    methods:{
        toWelcome:function(){
            this.$router.push('/todoList/'+this.inputText);
        }
    }

}
</script>

<style>

</style>