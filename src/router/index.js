import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome.vue'
import ListPage from '../components/ListPage.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/todoList/:username',
      name: 'todoList',
      component:ListPage,
      props:true
    },
    {
      path: '/callBack',
      name: 'callBack',
      redirect:'/'
    },
  ]
})
