import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import state from './store/index'
import router from './router/index.js'


Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
    router,
    store: new Vuex.Store(state),
    render: h => h(App),
}).$mount('#app')
