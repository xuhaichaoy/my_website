import Vue from 'vue'
import Vuex from 'vuex'
import cookie from 'js-cookie'
import api from '../httpconfig/request'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 登录状态为没登录
    logined: false,
    token: '',
    // 用户信息数据,目前只需要avatar 和 name,还是把username也加上吧
    LoginedUser: {
      nickName: '',
      image: '',
      userName: '',
      introduction: '',
      github: '',
      wechat: '',
      id: ''
    }
  },
  mutations: {
    // 登录
    LOGIN(state) {
      // 先让登录状态变为登录了
      state.logined = true
    },
    // 登出
    LOGOUT(state) {
      state.logined = false
      state.LoginedUser.nickName = ""
      state.LoginedUser.github = ""
      state.LoginedUser.image = ""
      state.LoginedUser.userName = ""
      state.LoginedUser.introduction = ""
      state.LoginedUser.wechat = ""
      state.LoginedUser.id = ""
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    },
    GETINFO(state) {
      api.getInfo('', (res) => {
        if(res.data.code != -1) {
          const {data} = res.data
          state.logined = true
          state.LoginedUser.nickName = data.nickName
          state.LoginedUser.github = data.github
          state.LoginedUser.image = data.image
          state.LoginedUser.userName = data.userName
          state.LoginedUser.introduction = data.introduction
          state.LoginedUser.wechat = data.wechat
          state.LoginedUser.id = data.id
        }else {
          state.logined = false
          state.LoginedUser.nickName = ""
          state.LoginedUser.github = ""
          state.LoginedUser.image = ""
          state.LoginedUser.userName = ""
          state.LoginedUser.introduction = ""
          state.LoginedUser.wechat = ""
          state.LoginedUser.id = ""
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