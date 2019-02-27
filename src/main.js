import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routers from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from './httpconfig/http'
Vue.prototype.$http = axios

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.use(Antd)

const RouterConfig = {
  routes: Routers
}
const router = new VueRouter(RouterConfig)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
}).$mount('#app')
