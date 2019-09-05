<template>
    <div>
        <h1>Welcome to vue router!</h1>
        <router-link to="/">Welcome</router-link><br/>
        <router-link to="/login">login</router-link><br/>
        <router-link :to="'/todoList/'+username">TodoList</router-link><br/>   
    </div>
</template>

<script>
export default {
    name:'welcome',
    props:['username']

}
</script>

<style>

</style>