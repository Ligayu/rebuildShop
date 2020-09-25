import Vue from 'vue'
import App from './App'
// Vue.prototype.$axios=axios
// axios.defaults.baseURL='https://www.hiolabs.com/api/'


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
