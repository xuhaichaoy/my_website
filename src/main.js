import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './router'
import * as Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from './httpconfig/http'
import App from './App.vue'
import store from './store/store'

Vue.use(VueRouter)

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Antd)

const RouterConfig = {
  mode: 'history',
  base: '/hc/',
  routes: Routers,
}
const router = new VueRouter(RouterConfig)

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
