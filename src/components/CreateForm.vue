<template>
    <div class="input-form">
        <input type="input" v-model="inputtingItem">
        <button @click="handleCreateTodo">Add</button>
        <router-link to="/callBack">返回</router-link><br/>
    </div>
</template>

<script>
    export default {
        name: "create-form",
        data: function () {
            return {
                inputtingItem: ""
            }
        },
        methods: {
            handleCreateTodo: function () {
                this.$store.dispatch('addResponse',this.inputtingItem);
                //this.$store.commit("createToDoList",this.inputtingItem);
            }
        }
    }
</script>

<style scoped>

</style>
