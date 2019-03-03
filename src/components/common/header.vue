<template>
  <div>
    <div class="header">
      <a-row>
        <a-col class="clos" :xs="5" :sm="5" :md="5" :lg="5" :xl="5" :xll="4">
          <span class="logoName">海超的博客</span>
        </a-col>
        <a-col class="clos" :xs="19" :sm="19" :md="19" :lg="19" :xl="19" :xll="20">
          <a-row>
            <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="6">
              <a-input-search placeholder="搜索文章" style="width: 200px" @search="onSearch" />
            </a-col>
            <a-col class="menu" :xs="0" :sm="14" :md="14" :lg="16" :xl="12">
              <a-menu v-model="current" mode="horizontal" class="lineHeight" @click="pushmenu">
                <a-menu-item key="index">
                  <a-icon type="home" />首页
                </a-menu-item>
                <a-menu-item key="doc">
                  <a-icon type="edit" />归档
                </a-menu-item>
                <a-menu-item key="category">
                  <a-icon type="folder" />分类
                </a-menu-item>
                <a-menu-item key="about">
                  <a-icon type="user" />关于
                </a-menu-item>
              </a-menu>
            </a-col>
            <a-col :xs="0" :sm="10" :md="10" :lg="8" :xl="6">
              <a-button type="primary" @click="showModallogin">登录</a-button>
              <a-button style="marginLeft: 20px" @click="showModalreg">注册</a-button>
              <div>
                <a-modal title="登录" :visible="loginvisible" @cancel="handleCancel1" :footer="null">
                  <a-form layout="vertical" :form="form" @submit="handleSubmitlogin">
                    <a-form-item label="用户名">
                      <a-input v-decorator="[
                              'userName',
                              { rules: [{ required: true, message: 'Please input your username!' }] }
                            ]" placeholder="Username">
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" /></a-input>
                    </a-form-item>
                    <a-form-item label="密码">
                      <a-input v-decorator="[
                              'password',
                              { rules: [{ required: true, message: 'Please input your Password!' }] }
                            ]" type="password" placeholder="Password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                      </a-input>
                    </a-form-item>
                    <a-form-item>
                      <a-checkbox v-decorator="[
                          'remember',
                          {
                            valuePropName: 'checked',
                            initialValue: true,
                          }
                        ]">
                        Remember me
                      </a-checkbox>
                      <a class="login-form-forgot" href="" style="float: right">
                        Forgot password
                      </a>
                      <a-button type="primary" html-type="submit" class="login-form-button" style="width: 100%; display: block; margin-top: 10px; margin-bottom: 10px">
                        Log in
                      </a-button>
                        Or <a href="javascript:;" @click="reg">
                        register now!
                      </a>
                    </a-form-item>
                  </a-form>
                </a-modal>
              </div>
               <div>
                <a-modal title="注册" :visible="regvisible" @cancel="handleCancel2" :footer="null">
                  <a-form layout="vertical" :form="form" @submit="handleSubmitreg">
                    <a-form-item label="用户名">
                      <a-input v-decorator="[
                              'userName',
                              { rules: [{ required: true, message: 'Please input your username!' }] }
                            ]" placeholder="Username">
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" /></a-input>
                    </a-form-item>
                    <a-form-item label="密码">
                      <a-input v-decorator="[
                              'password',
                              { rules: [{ required: true, message: 'Please input your Password!' }] }
                            ]" type="password" placeholder="Password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                      </a-input>
                    </a-form-item>
                    <a-form-item label="重复密码">
                      <a-input v-decorator="[
                              'repassword',
                              { rules: [{ required: true, message: 'Please input your Password again!' }] }
                            ]" type="password" placeholder="Password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                      </a-input>
                    </a-form-item>
                    <a-form-item>
                      <!-- <a-checkbox v-decorator="[
                          'remember',
                          {
                            valuePropName: 'checked',
                            initialValue: true,
                          }
                        ]">
                        Remember me
                      </a-checkbox>
                      <a class="login-form-forgot" href="" style="float: right">
                        Forgot password
                      </a> -->
                      <a-button type="primary" html-type="submit" class="login-form-button" style="width: 100%; display: block; margin-top: 10px; margin-bottom: 10px">
                        Reg in
                      </a-button>
                        Or <a href="javascript:;" @click="login">
                        Log in now!
                      </a>
                    </a-form-item>
                  </a-form>
                </a-modal>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div class="hideheader"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: "",
        current: ["index"],
        loginvisible: false,
        regvisible: false,
        form: this.$form.createForm(this)
      };
    },
    // watch: {
    //   $route() {
    //     var arr = []
    //     arr.push(this.$route.path.substring(1))
    //     this.current = arr
    //   }
    // },
    mounted() {
      if (this.$route.path.substring(1)) {
        var arr = []
        arr.push(this.$route.path.substring(1))
        this.current = arr
      }
    },
    methods: {
      onSearch() {},
      pushmenu(item) {
        console.log(item)
        this.$router.push({
          path: "/" + item.key
        })
      },
      showModallogin() {
        this.loginvisible = true
      },
      showModalreg() {
        this.regvisible = true
      },
      loginhandleOk(e) {
        console.log('login')
        setTimeout(() => {
          this.loginvisible = false
          this.confirmLoading = false
        }, 2000)
      },
      reghandleOk(e) {
        console.log('reg')
        setTimeout(() => {
          this.regvisible = false
          this.confirmLoading = false
        }, 2000)
      },
      handleCancel1(e) {
        console.log("Clicked cancel button")
        this.loginvisible = false
      },
      handleCancel2(e) {
        console.log("Clicked cancel button")
        this.regvisible = false
      },
      reg() {
        this.loginvisible = false
        this.regvisible = true
      },
      login() {
        this.loginvisible = true
        this.regvisible = false
      },
      loginin() {

      },
      regin() {

      },
      handleSubmitlogin (e) {
        const _this = this
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
            this.loginhandleOk()
          }
        });
      },
      handleSubmitreg (e) {
        const _this = this
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
            this.reghandleOk()
          }
        });
      },
    }
  }
</script>

<style scoped>
  .clos {
    height: 65px;
    line-height: 65px;
  }
  
  .header {
    width: 100%;
    height: 65px;
    box-sizing: border-box;
    box-shadow: 0 2px 8px #f0f1f2;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 999;
  }
  
  .hideheader {
    height: 65px;
    width: 100%;
  }
  
  .logoName {
    font-size: 20px;
  }
  
  .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
  
  .components-input-demo-presuffix .anticon-close-circle:hover {
    color: #999;
  }
  
  .components-input-demo-presuffix .anticon-close-circle:active {
    color: #666;
  }
  
  .lineHeight {
    line-height: 65px;
    display: inline-block;
    box-sizing: border-box;
  }
  
  .divider {
    display: inline-block;
  }
  
  .menu {
    text-align: right;
  }
  
  .menu .ant-menu-item-selected,
  .menu .ant-menu-item-active {
    border-top: 2px solid #1890ff !important;
    border-bottom: none !important;
  }
  
  .menu .ant-menu-item {
    border-top: 2px solid #fff;
    border-bottom: none !important;
  }
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
</style>
