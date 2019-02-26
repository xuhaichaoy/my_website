<template>
  <div class="content">
    <a-row>
      <a-col :span="6" class="siedebar">
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
        <div style="margin-top: 26px">
          <a-divider orientation="left">最近文章📖</a-divider>
          <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <p>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <p>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <p>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <p>5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        </div>
        <div style="margin-top: 26px">
          <a-divider orientation="left">标签</a-divider>
          <a-tag class = "atips" color="pink">pink</a-tag>
          <a-tag class = "atips" color="red">red</a-tag>
          <a-tag class = "atips" color="orange">orange</a-tag>
          <a-tag class = "atips" color="green">green</a-tag>
          <a-tag class = "atips" color="cyan">cyan</a-tag>
          <a-tag class = "atips" color="blue">blue</a-tag>
          <a-tag class = "atips" color="purple">purple</a-tag>
        </div>
      </a-col>
      <a-col :span="18" class="clos">
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
      tips: "解释解释解释解释解释解释"
    };
  }
};
</script>
<style>
.content {
  padding-top: 40px;
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
  height: 100%;
  overflow: auto;
  /* position: fixed; */
  width: 100%;
  /* left: 0; */
  /* top: 0; */
}
.atips {
  display: inline-block;
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>
