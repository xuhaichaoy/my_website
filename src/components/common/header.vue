<template>
  <div>
    <div class="header">
      <a-row>
        <a-col class="clos closLogo" :xs="16" :sm="16" :md="16" :lg="5" :xl="5" :xll="4">
          <span class="logoName" @click="home">{{ bios }}</span>
        </a-col>
        <a-col class="clos" :xs="8" :sm="8" :md="8" :lg="19" :xl="19" :xll="20">
          <a-row>
            <!-- 搜索框 -->
            <a-col :xs="0" :sm="0" :md="0" :lg="6" :xl="5">
              <a-input-search placeholder="搜索文章" style="width: 100%" @search="onSearch"/>
            </a-col>
            <!-- 展开menu -->
            <a-col class="menu" :xs="0" :sm="0" :md="0" :lg="12" :xl="12">
              <a-menu v-model="current" mode="horizontal" class="lineHeight" @click="pushmenu">
                <a-menu-item key="index">
                  <a-icon type="home"/>Home
                </a-menu-item>
                <a-menu-item key="doc">
                  <a-icon type="edit"/>Doc
                </a-menu-item>
                <a-menu-item key="category">
                  <a-icon type="folder"/>Tags
                </a-menu-item>
                <a-menu-item key="about">
                  <a-icon type="user"/>Links
                </a-menu-item>
              </a-menu>
            </a-col>
            <!-- 压缩menu -->
            <a-col :xs="10" :sm="18" :md="4" :lg="0" :xl="0">
              <div style="width: 100%;display:inline-block">
                <a-button @click="toggleCollapsed" style="margin-bottom: 16px">
                  <a-icon :type="showFlag ? 'menu-unfold' : 'menu-fold'"/>
                </a-button>
              </div>
            </a-col>
            <!-- 压缩后用户 -->
            <a-col :xs="14" :sm="6" :md="0" :lg="0" :xl="0" style="text-align: center">
              <a-avatar icon="user" @click="showUser" :src="info.image"/>
            </a-col>
            <!-- 展开后用户 -->
            <a-col :xs="0" :sm="0" :md="20" :lg="6" :xl="7">
              <div v-if="!logined">
                <a-button type="primary" @click="showModallogin">登录</a-button>
                <a-button style="marginLeft: 20px" @click="showModalreg">注册</a-button>
                <div>
                  <a-modal
                    title="登录"
                    :visible="loginvisible"
                    @cancel="handleCancel1"
                    :footer="null"
                  >
                    <a-form layout="vertical" :form="form" @submit="handleSubmitlogin">
                      <a-form-item label="邮箱">
                        <a-input
                          v-decorator="[
                                              'userName',
                                              { rules: [{
                                                type: 'email', message: 'The input is not valid E-mail!',
                                              }, {
                                                required: true, message: 'Please input your E-mail!',
                                              }] }
                                            ]"
                          placeholder="Username"
                        >
                          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                        </a-input>
                      </a-form-item>
                      <a-form-item label="密码">
                        <a-input
                          v-decorator="[
                                              'password',
                                              { rules: [{ required: true, message: 'Please input your Password!' }] }
                                            ]"
                          type="password"
                          placeholder="Password"
                        >
                          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                        </a-input>
                      </a-form-item>
                      <a-form-item>
                        <a-checkbox
                          v-decorator="[
                                          'remember',
                                          {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                          }
                                        ]"
                        >Remember me</a-checkbox>
                        <a class="login-form-forgot" href style="float: right">Forgot password</a>
                        <a-button
                          type="primary"
                          html-type="submit"
                          class="login-form-button"
                          style="width: 100%; display: block; margin-top: 10px;"
                        >Log in</a-button>Or
                        <a href="javascript:;" @click="reg">register now!</a>
                      </a-form-item>
                    </a-form>
                  </a-modal>
                </div>
                <div>
                  <a-modal title="注册" :visible="regvisible" @cancel="handleCancel2" :footer="null">
                    <a-form layout="vertical" :form="form" @submit="handleSubmitreg">
                      <a-form-item label="邮箱">
                        <a-input
                          v-decorator="[
                                              'userName',
                                              { rules: [{
                                                type: 'email', message: 'The input is not valid E-mail!',
                                              }, {
                                                required: true, message: 'Please input your E-mail!',
                                              }] }
                                            ]"
                          placeholder="Username"
                        >
                          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                        </a-input>
                      </a-form-item>
                      <a-form-item label="密码">
                        <a-input
                          v-decorator="[
                                    'password',
                                    {
                                      rules: [{
                                        required: true, message: 'Please input your password!',
                                      }, {
                                        validator: validateToNextPassword,
                                      }],
                                    }
                                  ]"
                          type="password"
                          placeholder="Password"
                        >
                          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                        </a-input>
                      </a-form-item>
                      <a-form-item label="重复密码">
                        <a-input
                          v-decorator="[
                                    'confirm',
                                    {
                                      rules: [{
                                        required: true, message: 'Please confirm your password!',
                                      }, {
                                        validator: compareToFirstPassword,
                                      }],
                                    }
                                  ]"
                          type="password"
                          @blur="handleConfirmBlur"
                          placeholder="Password"
                        >
                          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                        </a-input>
                      </a-form-item>
                      <a-form-item>
                        <a-button
                          type="primary"
                          html-type="submit"
                          class="login-form-button"
                          style="width: 100%; display: block; margin-top: 10px; margin-bottom: 10px"
                        >Reg in</a-button>Or
                        <a href="javascript:;" @click="login">Log in now!</a>
                      </a-form-item>
                    </a-form>
                  </a-modal>
                </div>
              </div>
              <div v-if="logined">
                <a-icon type="file-add" class="bell" @click="publish" v-if="admin"/>
                <a-icon type="bell" class="bell" @click="bell"/>
                <a-icon type="setting" class="setting" @click="setting"/>
                <a-icon type="logout" class="setting" @click="logout"/>
                <a-avatar class="avatar" @click="showDrawer" :src="info.image"/>
              </div>
              <a-drawer
                title="个人信息"
                placement="right"
                :closable="false"
                @close="onClose"
                :visible="visible"
                :width="userInfo"
              >
                <p class="clearfix">
                  <a-upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    listType="picture-card"
                    :fileList="fileList"
                    @preview="handlePreview"
                    @change="handleChange"
                  >
                    <div v-if="fileList.length < 4">
                      <a-icon type="plus"/>
                      <div class="ant-upload-text">Upload</div>
                    </div>
                  </a-upload>
                  <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                    <img alt="example" style="width: 100%" :src="previewImage">
                  </a-modal>
                </p>
                <a-form :layout="formLayout" @submit="handleSubmit" :form="form">
                  <a-form-item
                    label="用户昵称"
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                    style="margin-bottom: 6px"
                  >
                    <a-input
                      v-decorator="[
                        'nickname',
                        {
                          initialValue: currentUser.nickName
                        }
                      ]"
                      size="small"
                      placeholder="Basic usage"
                      style="width: 100%; border: none"
                    />
                  </a-form-item>
                  <a-form-item
                    label="Github"
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                    style="margin-bottom: 6px"
                  >
                    <a-input
                      v-decorator="[
                        'github',
                        {
                          initialValue: currentUser.github
                        }
                      ]"
                      size="small"
                      placeholder="github"
                      style="width: 100%; border: none"
                    />
                  </a-form-item>
                  <a-form-item
                    label="个人简介"
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                    style="margin-bottom: 6px"
                  >
                    <a-textarea
                      v-decorator="[
                        'introduction',
                        {
                          initialValue: currentUser.introduction
                        }
                      ]"
                      placeholder="Autosize height with minimum and maximum number of lines"
                      :autosize="{ minRows: 2, maxRows: 10 }"
                      style="width: 100%;border:none"
                    />
                  </a-form-item>
                  <div
                    :style="{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background: '#fff',
                    textAlign: 'right',
                  }"
                  >
                    <a-button type="primary" html-type="submit" block>保存个人信息</a-button>
                  </div>
                </a-form>
              </a-drawer>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <div class="eilMenu" :class="{ 'showMenu':!showFlag, 'closeMenu':showFlag }">
        <a-row>
          <ul style="padding-left: 0; margin-top: 10px">
            <li @click="pushmenu('index', true)" style="line-height: 40px">
              <a-icon style="padding-right: 10px" type="home"/>Home
            </li>
            <li @click="pushmenu('doc', true)" style="line-height: 40px">
              <a-icon style="padding-right: 10px" type="edit"/>Doc
            </li>
            <li @click="pushmenu('category', true)" style="line-height: 40px">
              <a-icon style="padding-right: 10px" type="folder"/>Tags
            </li>
            <li @click="pushmenu('about', true)" style="line-height: 40px">
              <a-icon style="padding-right: 10px" type="user"/>Links
            </li>
          </ul>
          <a-input-search
            placeholder="搜索文章"
            style="width: 80%; text-align: center"
            @search="onSearch"
          />
        </a-row>
      </div>
      <div class="eilMenu" :class="{ 'showMenu':!userFlag, 'closeMenu1':userFlag }">
        <a-row>
          <ul style="padding-left: 0; margin-top: 10px">
            <li @click="publish" style="line-height: 40px">
              <a-icon style="padding-right: 10px" type="home"/>发布文章
            </li>
            <li @click="showDrawer" style="line-height: 40px">
              <a-icon style="padding-right: 10px" type="edit"/>个人中心
            </li>
            <li @click="logout" style="line-height: 40px">
              <a-icon style="padding-right: 10px" type="user"/>退出登录
            </li>
          </ul>
        </a-row>
      </div>
    </div>
    <div class="padheight"></div>
    <div class="hideheader"></div>
  </div>
</template>

<script>
import api from "../../httpconfig/request";
export default {
  data() {
    return {
      userintroduction: "",
      usergithub: "",
      usernickname: "",
      formLayout: "horizontal",
      showFlag: false,
      userFlag: false,
      userName: "",
      current: ["index"],
      userInfo: "36%",
      loginvisible: false,
      regvisible: false,
      form: this.$form.createForm(this),
      visible: false,
      bios: "",
      currentUser: {
        nickName: "",
        image: "",
        userName: "",
        introduction: "",
        github: "",
        wechat: "",
        id: "",
      },
      collapsed: false,
      previewVisible: false,
      previewImage: "",
      fileList: [
        {
          uid: "-1",
          name: "xxx.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
      ]
    };
  },
  computed: {
    admin() {
      return this.$store.state.LoginedUser.admin
    },
    logined() {
      return this.$store.state.logined;
    },
    info() {
      this.fileList[0].url = this.$store.state.LoginedUser.image;
      return this.$store.state.LoginedUser;
    },
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 }
          }
        : {};
    }
  },
  mounted() {
    this.bios = this.$store.state.currentUser.bios;
    this.$store.dispatch("getInfo");
    if (this.$route.path.substring(1)) {
      var arr = [];
      arr.push(this.$route.path.substring(1));
      this.current = arr;
    }
    window.onscroll = () => {
      this.userFlag = false;
      this.showFlag = false;
    };
    if (document.body.clientWidth < 730) {
      this.userInfo = "84%";
    }
    window.onresize = () => {
      if (document.body.clientWidth < 730) {
        this.userInfo = "84%";
      }
    };
  },
  watch: {
    $route(to, from) {
      if (this.$route.path.substring(1)) {
        var arr = [];
        arr.push(this.$route.path.substring(1));
        this.current = arr;
      }
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          api.setinfo(values, res => {
            const { code, msg } = res.data.data;
            if (code === 100) {
              this.$message.success('设置成功！！！')
              this.visible = false;
            } else {
              this.$message.error(msg);
            }
          });
        }
      });
    },
    showUser() {
      if (JSON.stringify(this.$store.state.LoginedUser) === "{}") {
        this.loginvisible = true;
        return;
      }
      this.showFlag = false;
      this.userFlag = !this.userFlag;
    },
    toggleCollapsed() {
      this.userFlag = false;
      this.showFlag = !this.showFlag;
    },
    home() {
      this.userFlag = false;
      this.showFlag = false;
      this.$router.push({
        path: "/index"
      });
    },
    onSearch(value) {
      if (value.trim()) {
        this.$router.push({
          path: "/search/searchValue:title=" + value
        });
        this.showFlag = false;
      }
    },
    pushmenu(item, flag) {
      if (flag) {
        this.$router.push({
          path: "/" + item
        });
        this.showFlag = false;
      } else {
        this.$router.push({
          path: "/" + item.key
        });
      }
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], {
          force: true
        });
      }
      callback();
    },
    showModallogin() {
      this.loginvisible = true;
    },
    showModalreg() {
      this.regvisible = true;
    },
    handleCancel1() {
      this.loginvisible = false;
    },
    handleCancel2() {
      this.regvisible = false;
    },
    reg() {
      this.loginvisible = false;
      this.regvisible = true;
    },
    login() {
      this.loginvisible = true;
      this.regvisible = false;
    },
    loginin() {},
    regin() {},
    handleSubmitlogin(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          api.login(values, res => {
            const { code, msg } = res.data;
            if (code === 100) {
              this.$message.success(msg);
              this.loginvisible = false;
              this.$store.dispatch("getInfo");
              this.$router.push({
                path: "/index"
              });
            } else {
              this.$message.error(msg);
            }
          });
        }
      });
    },
    handleSubmitreg(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          api.reg(values, res => {
            const { code, msg } = res.data;
            if (code === 100) {
              this.$message.success(msg);
              this.loginvisible = true;
              this.regvisible = false;
            } else {
              this.$message.error(msg);
            }
          });
        }
      });
    },
    bell() {},
    setting() {},
    showDrawer() {
      this.userFlag = false;
      this.currentUser = this.$store.state.LoginedUser;
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    logout() {
      this.userFlag = false;
      this.$store.dispatch("logout");
      this.$message.success("退出成功！");
      this.$router.push({
        path: "/index"
      });
    },
    handleCancel() {
      this.previewVisible = false;
    },
    handlePreview(file) {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
    publish() {
      this.userFlag = false;
      this.$router.push({
        path: "/publish"
      });
    },
  }
};
</script>

<style scoped>
.eilMenu {
  width: 100%;
  background: white;
  margin-top: 2px;
  box-shadow: 0 2px 8px #f0f1f2;
  overflow: hidden;
}
.showMenu {
  transition: all 0.3s ease 0s;
  height: 0px !important;
}
.closeMenu {
  transition: all 0.3s ease 0s;
  height: 230px !important;
}
.closeMenu1 {
  transition: all 0.3s ease 0s;
  height: 140px !important;
}

.clos {
  height: 65px;
  line-height: 65px;
}

@media screen and (max-width: 992px) {
  .closLogo {
    text-align: left;
  }
  .logoName {
    padding-left: 28px;
  }
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

@media screen and (max-width: 576px) {
  .padheight {
    height: 82px;
  }
  .hideheader {
    height: 82px;
  }
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
