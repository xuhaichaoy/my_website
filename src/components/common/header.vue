<template>
  <div>
    <div class="header">
      <a-row>
        <a-col class="clos" :xs="5" :sm="5" :md="5" :lg="5" :xl="5" :xll="4">
          <span class="logoName" @click="home">{{ bios }}</span>
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
              <div v-if="!logined">
                <a-button type="primary" @click="showModallogin">登录</a-button>
                <a-button style="marginLeft: 20px" @click="showModalreg">注册</a-button>
                <div>
                  <a-modal title="登录" :visible="loginvisible" @cancel="handleCancel1" :footer="null">
                    <a-form layout="vertical" :form="form" @submit="handleSubmitlogin">
                      <a-form-item label="邮箱">
                        <a-input v-decorator="[
                                              'userName',
                                              { rules: [{
                                                type: 'email', message: 'The input is not valid E-mail!',
                                              }, {
                                                required: true, message: 'Please input your E-mail!',
                                              }] }
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
                      <a-form-item label="邮箱">
                        <a-input v-decorator="[
                                              'userName',
                                              { rules: [{
                                                type: 'email', message: 'The input is not valid E-mail!',
                                              }, {
                                                required: true, message: 'Please input your E-mail!',
                                              }] }
                                            ]" placeholder="Username">
                          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" /></a-input>
                      </a-form-item>
                      <a-form-item label="密码">
                        <a-input v-decorator="[
                                    'password',
                                    {
                                      rules: [{
                                        required: true, message: 'Please input your password!',
                                      }, {
                                        validator: validateToNextPassword,
                                      }],
                                    }
                                  ]" type="password" placeholder="Password">
                          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                      </a-form-item>
                      <a-form-item label="重复密码">
                        <a-input v-decorator="[
                                    'confirm',
                                    {
                                      rules: [{
                                        required: true, message: 'Please confirm your password!',
                                      }, {
                                        validator: compareToFirstPassword,
                                      }],
                                    }
                                  ]" type="password" @blur="handleConfirmBlur" placeholder="Password">
                          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                      </a-form-item>
                      <a-form-item>
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
              </div>
              <div v-if="logined">
                <a-icon type="file-add" class="bell" @click = "publish"/>
                <a-icon type="bell" class="bell" @click="bell" />
                <a-icon type="setting" class="setting" @click="setting" />
                <a-icon type="logout" class="setting" @click="logout" />
                <a-avatar class="avatar" @click="showDrawer" :src="info.image" />
              </div>
              <a-drawer title="个人信息" placement="right" :closable="false" @close="onClose" :visible="visible" width="36%">
                <p class="clearfix">
                  <a-upload action="//jsonplaceholder.typicode.com/posts/" listType="picture-card" :fileList="fileList" @preview="handlePreview" @change="handleChange">
                    <div v-if="fileList.length < 4">
                      <a-icon type="plus" />
                      <div class="ant-upload-text">Upload</div>
                    </div>
                  </a-upload>
                  <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                    <img alt="example" style="width: 100%" :src="previewImage" />
                  </a-modal>
                </p>
                <p>昵称：<span>{{ currentUser.nickName }}</span></p>
                <p>个人简介：<span>{{ currentUser.introduction }}</span></p>
                <p>Some contents...</p>
              </a-drawer>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div class="padheight"></div>
    <div class="hideheader"></div>
  </div>
</template>

<script>
  import api from '../../httpconfig/request'
  import cookie from 'js-cookie'
  export default {
    data() {
      return {
        userName: "",
        current: ["index"],
        loginvisible: false,
        regvisible: false,
        form: this.$form.createForm(this),
        visible: false,
        bios:'',
        currentUser: {
          nickName: '',
          image: '',
          userName: '',
          introduction: '',
          github: '',
          wechat: '',
          id: ''
        },
        previewVisible: false,
        previewImage: '',
        fileList: [{
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
  
      };
    },
    computed: {
      logined() {
        return this.$store.state.logined
      },
      info() {
        this.fileList[0].url = this.$store.state.LoginedUser.image
        return this.$store.state.LoginedUser
      }
    },
    mounted() {
      this.bios = this.$store.state.currentUser.bios
      this.$store.dispatch("getInfo")
      if (this.$route.path.substring(1)) {
        var arr = []
        arr.push(this.$route.path.substring(1))
        this.current = arr
      }
    },
    methods: {
      home() {
        this.$router.push({
            path: "/index"
          });
      },
      onSearch(value) {
        if(value.trim()) {
          this.$router.push({
            path: "/search/searchValue=" + value
          });
        }
      },
      pushmenu(item) {
        this.$router.push({
          path: "/" + item.key
        })
      },
      handleConfirmBlur(e) {
        const value = e.target.value;
        this.confirmDirty = this.confirmDirty || !!value;
      },
      compareToFirstPassword(rule, value, callback) {
        const form = this.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      },
      validateToNextPassword(rule, value, callback) {
        const form = this.form;
        if (value && this.confirmDirty) {
          form.validateFields(['confirm'], {
            force: true
          });
        }
        callback();
      },
      showModallogin() {
        this.loginvisible = true
      },
      showModalreg() {
        this.regvisible = true
      },
      handleCancel1() {
        this.loginvisible = false
      },
      handleCancel2() {
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
      loginin() {},
      regin() {},
      handleSubmitlogin(e) {
        // const _this = this
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            api.login(values, (res) => {
              const {
                code,
                msg,
                data
              } = res.data
              if (code === 100) {
                cookie.set("token", data, 1 / 12)
                cookie.set("userName", values.userName)
                this.$message.success(msg)
                this.loginvisible = false
                this.$store.dispatch("getInfo")
              } else {
                this.$message.error(msg);
              }
            })
          }
        });
      },
      handleSubmitreg(e) {
        // const _this = this
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            api.reg(values, (res) => {
              const {
                code,
                msg
              } = res.data
              if (code === 100) {
                this.$message.success(msg)
                this.loginvisible = true
                this.regvisible = false
              } else {
                this.$message.error(msg);
              }
            })
          }
        });
      },
      bell() {
      },
      setting() {
      },
      showDrawer() {
        this.currentUser = this.$store.state.LoginedUser
        this.visible = true
      },
      onClose() {
        this.visible = false
      },
      logout() {
        this.$store.dispatch("logout")
        this.$message.success('退出成功！')
        this.$router.push({
          path: "/index"
        })
      },
      handleCancel() {
        this.previewVisible = false
      },
      handlePreview(file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      handleChange({fileList}) {
        this.fileList = fileList
      },
      publish() {
        this.$router.push({
          path: "/publish"
        })
      }
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
  
  .padheight {
    height: 110px;
    background: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 998;
  }
  
  .hideheader {
    height: 110px;
    width: 100%;
  }
  
  .logoName {
    font-size: 20px;
    cursor: pointer;
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
  
  .bell {
    margin-left: 20px;
    font-size: 18px;
    vertical-align: middle;
    cursor: pointer;
  }
  
  .setting {
    margin-left: 20px;
    font-size: 18px;
    vertical-align: middle;
    cursor: pointer;
  }
  
  .avatar {
    margin-left: 20px;
    vertical-align: middle;
    cursor: pointer;
  }
  
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
  
  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
