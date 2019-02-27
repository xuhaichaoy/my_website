<template>
  <div>
    <div class="header">
      <a-row>
        <a-col :span="4" class="clos">
          <span class="logoName">海超的博客</span>
        </a-col>
        <a-col class="clos" :span="20">
          <a-row>
            <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="6">
              <a-input-search placeholder="搜索文章" style="width: 200px" @search="onSearch"/>
            </a-col>
            <a-col class="menu" :xs="0" :sm="14" :md="14" :lg="16" :xl="12">
              <a-menu v-model="current" mode="horizontal" class="lineHeight" @select="pushmenu">
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
              <a-button type="primary">登录</a-button>
              <a-button style="marginLeft: 20px">注册</a-button>
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
      current: ["index"]
    };
  },
  watch: {
    $route() {
      var arr = []
      arr.push(this.$route.path.substring(1))
      this.current = arr
    }
  },
  mounted () {
    var arr = []
    arr.push(this.$route.path.substring(1))
    this.current = arr
  },
  methods: {
    onSearch() {},
    pushmenu(item) {
      this.$router.push({
        path: "/" + item.key
      });
    }
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
</style>
