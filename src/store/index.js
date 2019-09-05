import axios from "axios";
export default {
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '吃饭'},
            {status: 'completed', content: '睡觉'},
            {status: 'completed', content: '打豆豆'}
        ],
        currentFilter: 'all',
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        createToDoList:function(state,content){
            state.todoList.push(
                {status:'active',content}
            );
        },
        handleChangeStatus:function(state,index){
            state.todoList[index].status  === 'completed' ? 'active' : 'completed'; 
            // this.$store.state.todoList[index].status 
            // = this.$store.state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        currentFilterStatus:function(state,currentFilter){
            state.currentFilter = currentFilter;
        },
        initToDos:function(state,request){
            state.todoList = request;
        },
        addToDo:function(state,request){
            state.todoList = request;
        },
        loading:function(){   
        }

    },
    actions:{
        //请求网络
        queryResponse:function(store){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.get(url).then(function(response){
                let request = response.data;
                console.log(response);
                store.commit('initToDos',request);
            }).catch(
                function(error){
                console.log(error.reponse);
            })
        },
        addResponse:function(store,inputParam){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            console.log(inputParam,"11111");
            axios.post(url,{
                content:inputParam,
                status:"actice"
            }).then(function(response){
                console.log(response);
             //   let request = response.data;
             //   store.commit('addToDo',request);
                store.queryResponse();
            }).catch(
                function(error){
                console.log(error);
            })
        },
        putResponse:function(){

        },
        deleteResponse:function(){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            let param={id:''};
            axios.delete(url, {data: param})
              .then(function(response) {

                })
        }
 
    }


}
