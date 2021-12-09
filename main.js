import Vue from 'vue'
import App from './App'

//引入vuex
import store from './store/index'
//vuex全局配置
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	  store
})
app.$mount()
