import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './router'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from './httpconfig/http'
import App from './App.vue'
import store from './store/store'
import {
  // Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  // Collapse,
  // Carousel,
  // Cascader,
  Checkbox,
  Col,
  // DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  // InputNumber,
  Layout,
  List,
  // LocaleProvider,
  message,
  Menu,
  Modal,
  notification,
  Pagination,
  // Popconfirm,
  // Popover,
  // Progress,
  // Radio,
  // Rate,
  Row,
  Select,
  // Slider,
  Spin,
  // Steps,
  // Switch,
  // Table,
  // Transfer,
  // Tree,
  // TreeSelect,
  // Tabs,
  Tag,
  // TimePicker,
  Timeline,
  Tooltip,
  // Mention,
  Upload,
  // version,
  Drawer,
  Skeleton,
  Comment,
  ConfigProvider,
} from 'ant-design-vue';

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;

/* v1.1.3+ registration methods */
// Vue.use(Affix);
Vue.use(Anchor);
Vue.use(AutoComplete);
Vue.use(Alert);
Vue.use(Avatar);
Vue.use(BackTop);
Vue.use(Badge);
Vue.use(Breadcrumb);
Vue.use(Button);
Vue.use(Calendar);
Vue.use(Card);
// Vue.use(Collapse);
// Vue.use(Carousel);
// Vue.use(Cascader);
Vue.use(Checkbox);
Vue.use(Col);
// Vue.use(DatePicker);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(Dropdown);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Input);
// Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(List);
// Vue.use(LocaleProvider);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Pagination);
// Vue.use(Popconfirm);
// Vue.use(Popover);
// Vue.use(Progress);
// Vue.use(Radio);
// Vue.use(Rate);
Vue.use(Row);
Vue.use(Select);
// Vue.use(Slider);
Vue.use(Spin);
// Vue.use(Steps);
// Vue.use(Switch);
// Vue.use(Table);
// Vue.use(Transfer);
// Vue.use(Tree);
// Vue.use(TreeSelect);
// Vue.use(Tabs);
Vue.use(Tag);
// Vue.use(TimePicker);
Vue.use(Timeline);
Vue.use(Tooltip);
Vue.use(Upload);
Vue.use(Skeleton);
Vue.use(Comment);
Vue.use(ConfigProvider);

Vue.use(VueRouter)

Vue.prototype.$http = axios
Vue.config.productionTip = false

// Vue.use(Antd)

const RouterConfig = {
  mode: 'history',
  base: '/',
  routes: Routers,
}
var router = new VueRouter(RouterConfig)

router.beforeEach(function (to, from, next) {  
  const nextRoute = ['publish']
  // const auth = store.state.auth 
  //跳转至上述3个页面  
  if (nextRoute.indexOf(to.name) >= 0) {  
      //未登录  
      if (!this.$store.state.logined) {  
          router.push({name: 'index'})  
      }  
  }  
  //已登录的情况再去登录页，跳转至首页  
  // if (to.name === 'login') {  
  //     if (auth.IsLogin) {  
  //         router.push({name: 'home'})
  //     }  
  // }  
  next()
});  
new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
