<template>
  <div class="content">
    <a-row :style="{ width: '100%' }">
      <a-col :span="5" class="siedebar">
        <div style="border-right: 1px solid #e8e8e8; padding-bottom: 20px">
          <a-avatar :size="132" icon="user"/>
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
          <a-divider orientation="left">最近文章</a-divider>
          <ul>
            <li>1.<a>Lorem ipsum dolor</a></li>
            <li>2.<a>Lorem ipLorem ipLorem ipsum dolor</a></li>
            <li>3.<a>Lorem ipsum doloLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorr</a></li>
            <li>4.<a>Lorem Lorem ipLorem ipLorem ipLorem ipipsum dolor</a></li>
            <li>5.<a>Lorem ipsum dolor</a></li>
            <li>6.<a>LoreLorem ipLorem ipLorem ipm ipsum dolor</a></li>
            <li>7.<a>Lorem ipsum dolor</a></li>
            <li>8.<a>LoremLorem ipLorem ipLorem ip ipsum dolor</a></li>
            <li>9.<a>Lorem ipsum dolor</a></li>
          </ul>
        </div>
        <div style="padding-top: 26px; margin-bottom: 30px; border-right: 1px solid #e8e8e8; ">
          <a-divider orientation="left">标签</a-divider>
          <a-tag class="atips" color="pink">pink</a-tag>
          <a-tag class="atips" color="red">red</a-tag>
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
      <a-col :span="19" class="scroll">
        <router-view></router-view>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      currentName: "海超",
      tips: "前端小白一枚，还在学习当中～"
    };
  }
};
</script>
<style>
.content {
  padding-top: 40px;
  box-sizing: border-box;
}
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
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* overflow: auto; */
  /* width: 100%; */
}
.atips {
  display: inline-block;
  margin-top: 6px;
  margin-bottom: 6px;
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
}
.scroll {
  height: calc(100vh - 105px);
  overflow: auto;
  padding-left: 40px!important;
  padding-right: 20px!important;
  box-sizing: border-box;
}
.article {
  border-right: 1px solid #e8e8e8;
}
.article li {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* padding-left: 30px; */
  padding-right: 24px;
  box-sizing: border-box;
  text-align: left;
  line-height: 28px;
}
.article ul {
  padding-left: 12px;
}
</style>
