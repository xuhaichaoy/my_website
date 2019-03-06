<template>
  <div class="content">
    <a-row :style="{ width: '100%' }">
      <a-col  class="siedebar" :xs="0" :sm="0" :md="0" :lg="5" :xl="5" :xll="4">
        <div style="border-right: 1px solid #e8e8e8; padding-bottom: 20px">
          <a-avatar :size="132" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
          <h4 class="title">{{ currentName }}</h4>
          <span class="tips">{{ tips }}</span>
          <div class="hrefs">
            <a>
              <a-icon type="github" class="hrefaa"/>
              <span>github</span>
            </a>
            <a class="hrefa">
              <a-icon type="wechat" class="hrefaa"/>
              <span>wechat</span>
            </a>
          </div>
        </div>
        <div class="article">
          <a-divider orientation="left" style="margin: 0; padding: 16px 0">最近文章</a-divider>
          <ul>
            <li><a>Koa基础知识</a></li>
            <li><a>如何编写高质量函数 -- 命名 </a></li>
            <li><a>如何编写高质量函数 -- 命名 </a></li>
            <li><a>如何编写高质量函数 -- 命名 m ipipsum dolor</a></li>
            <li><a>如何编写高质量函数 -- 命名 </a></li>
            <li><a>如何编写高质量函数 -- 命名 </a></li>
          </ul>
        </div>
        <div style="border-right: 1px solid #e8e8e8; ">
          <a-divider orientation="left" style="margin: 0; padding: 16px 0">标签</a-divider>
          <a-tag class="atips" color="pink">node</a-tag>
          <a-tag class="atips" color="red">javascript</a-tag>
          <a-tag class="atips" color="orange">orange</a-tag>
          <a-tag class="atips" color="green">green</a-tag>
          <a-tag class="atips" color="cyan">cyan</a-tag>
          <a-tag class="atips" color="blue">blue</a-tag>
          <a-tag class="atips" color="purple">purple</a-tag>
          <a-tag class="atips" color="pink">pink</a-tag>
          <a-tag class="atips" color="red">red</a-tag>
          <a-tag class="atips" color="orange">orange</a-tag>
          <a-tag class="atips" color="green">green</a-tag>
          <a-tag class="atips" color="cyan">cyan</a-tag>
          <a-tag class="atips" color="blue">blue</a-tag>
          <a-tag class="atips" color="purple">purple</a-tag>
        </div>
      </a-col>
      <a-col :xs="0" :sm="0" :md="0" :lg="5" :xl="5" :xll="4">
      </a-col>
      <a-col :span="19" class="scroll" :xs="24" :sm="25" :md="24" :lg="19" :xll="20">
        <router-view></router-view>
      </a-col>
    </a-row>
    <div>
    <a-back-top />
  </div>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      currentName: "海超",
      tips: "前端小白一枚～"
    };
  }
};
</script>
<style>
.title {
  margin-top: 16px;
  font-size: 20px;
}
.tips {
  font-size: 12px;
  display: block;
}
.hrefs {
  margin-top: 10px;
}
.hrefs > a {
  display: inline-block;
  color: rgba(0, 0, 0, 0.65);
}
.hrefa {
  margin-left: 10px;
  padding-right: 6px;
}
.hrefs > a span {
  display: inline-block;
  vertical-align: middle;
}
.hrefaa {
  color: rgba(0, 0, 0, 0.65);
  vertical-align: middle !important;
  margin-right: 4px;
}
.siedebar {
  box-sizing: border-box;
  height: calc(100vh - 105px);
  overflow: auto;
  position: fixed;
  top: 110px;
  left: 0;
  /* overflow: auto; */
  /* width: 100%; */
}
.atips {
  display: inline-block;
  margin-top: 6px!important;
  margin-bottom: 6px!important;
}
.scroll {
  /* height: calc(100vh - 105px); */
  /* overflow: auto; */
  padding-left: 40px!important;
  padding-right: 20px!important;
  /* box-sizing: border-box; */
}
.article {
  border-right: 1px solid #e8e8e8;
  margin-bottom: -14px;
}
.article li {
  padding-left: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 20px;
  box-sizing: border-box;
  text-align: left;
  line-height: 28px;
  font-size: 14px;
}
.article li:hover {
  background: #f0f2f5;
  color: #1890ff!important;
}
.article li:hover a{
  color: #1890ff!important;
}
.article li a{
  color: #8590a6;
}
.article ul {
  padding-left: 0;
}
</style>
