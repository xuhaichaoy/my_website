import Vue from 'vue'
import Vuex from 'vuex'
// import cookie from 'js-cookie'
import api from '../httpconfig/request'
// import cookie from 'js-cookie'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 登录状态为没登录
    logined: false,
    admin: 0,
    currentUser: {
      bios: "Haichao.Xu's Blog",
      nickName: 'Haichao.Xu',
      image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // userName: '1@qq.com',
      introduction: '未来的事无人知晓，所以才有无穷可能',
      github: 'https://github.com/xuhaichaoy',
      wechat: '',
      // id: '11'
    },
    // 用户信息数据,目前只需要avatar 和 name,还是把username也加上吧
    LoginedUser: {},
    loading: true
  },
  mutations: {
    // 登录
    LOGIN(state) {
      // 先让登录状态变为登录了
      state.logined = true
    },
    // 登出
    LOGOUT(state) {
      api.logout('', (res) => {
        const data = res.data
        if(data.code === 1) {
          state.logined = false
          state.LoginedUser = {}
          // state.LoginedUser.nickName = ""
          // state.LoginedUser.github = ""
          // state.LoginedUser.image = ""
          // // state.LoginedUser.userName = ""
          // state.LoginedUser.introduction = ""
          // state.LoginedUser.wechat = ""
          // state.LoginedUser.id = ""
        }
      })
    },
    GETINFO(state) {
      api.getInfo('', (res) => {
        if(res.data.code != -1) {
          const {data} = res.data
          state.logined = true
          state.LoginedUser = data
          state.admin = data.admin
        }else {
          state.logined = false
          state.LoginedUser = {}
          state.admin = 0
        }
      })
    }
  },
  actions: {
    login(context) {
      context.commit('LOGIN')
    },
    logout(context) {
      context.commit('LOGOUT')
    },
    getInfo(context) {
      context.commit('GETINFO')
    }
  }
})

export default store