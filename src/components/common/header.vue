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
              <a-input-search placeholder="搜索文章" style="width: 200px" @search="onSearch"/>
            </a-col>
            <a-col class="menu" :xs="0" :sm="14" :md="14" :lg="16" :xl="12">
              <a-menu v-model="current" mode="horizontal" class="lineHeight" @click="pushmenu">
                <a-menu-item key="index">
                  <a-icon type="home"/>首页
                </a-menu-item>
                <a-menu-item key="doc">
                  <a-icon type="edit"/>归档
                </a-menu-item>
                <a-menu-item key="category">
                  <a-icon type="folder"/>分类
                </a-menu-item>
                <a-menu-item key="about">
                  <a-icon type="user"/>关于
                </a-menu-item>
              </a-menu>
            </a-col>
            <a-col :xs="0" :sm="10" :md="10" :lg="8" :xl="6">
              <a-button type="primary" @click="showDrawer">登录</a-button>
              <a-button style="marginLeft: 20px" @click="showDrawer">注册</a-button>
              <a-drawer
                title="Basic Drawer"
                placement="right"
                :closable="false"
                @close="onClose"
                :visible="visible"
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </a-drawer>
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
      visible: false,
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
      var arr = [];
      arr.push(this.$route.path.substring(1));
      this.current = arr;
    }
  },
  methods: {
    onSearch() {},
    pushmenu(item) {
      console.log(item);
      this.$router.push({
        path: "/" + item.key
      });
    },
    showDrawer() {
      console.log(12313)
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  }
};
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
  
  border-top: 2px solid #1890ff!important;
  border-bottom: none !important;
}
.menu .ant-menu-item {
  border-top: 2px solid #fff;
  border-bottom: none !important;
}
</style>
