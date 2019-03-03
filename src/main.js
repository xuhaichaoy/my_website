import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './router'
import * as Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from './httpconfig/http'
import App from './App.vue'
Vue.use(VueRouter)

Vue.prototype.$http = axios
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
