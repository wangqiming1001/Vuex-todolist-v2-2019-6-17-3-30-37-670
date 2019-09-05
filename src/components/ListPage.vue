<template>
    <div>
        <h2>用户：{{username}}，你好！</h2>
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
        <CreateForm/>
        <TodoList/>
        <TodoListFilter/>
    </div>
</template>

<script>
    import CreateForm from './CreateForm.vue'
    import TodoList from './TodoList.vue'
    import TodoListFilter from './TodoListFilter.vue'

    export default {
        name: 'listPage',
        props:['username'],
        components: {
            CreateForm,
            TodoList,
            TodoListFilter,
        },
        created:function(){
            this.$store.dispatch('queryResponse');
            this.$store.dispatch('addResponse');
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
</style>
