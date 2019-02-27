<template>
  <div class="contentRight">
    <div class="card">
      <a-card title="Koa使用指南" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
        <a-divider dashed/>
        <div class="cardBottom">
          <a-icon type="message"/>
          <span class="spans">23</span>
          <a-divider type="vertical"/>
          <a-icon type="tag"/>
          <a-tag color="pink" style="margin-left: 8px">后端</a-tag>
          <a-divider type="vertical"/>
          <a-icon type="folder"/>
          <a-tag color="cyan" style="margin-left: 8px">node</a-tag>
        </div>
      </a-card>
      <a-card title="如何编写高质量函数 -- 命名 " :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
        <a-divider dashed/>
        <div class="cardBottom">
          <a-icon type="message"/>
          <span class="spans">23</span>
          <a-divider type="vertical"/>
          <a-icon type="tag"/>
          <a-tag color="pink" style="margin-left: 8px">后端</a-tag>
          <a-divider type="vertical"/>
          <a-icon type="folder"/>
          <a-tag color="cyan" style="margin-left: 8px">node</a-tag>
        </div>
      </a-card>
      <a-card title="为什么函数式组件需要引入 React " :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
        <a-divider dashed/>
        <div class="cardBottom">
          <a-icon type="message"/>
          <span class="spans">23</span>
          <a-divider type="vertical"/>
          <a-icon type="tag"/>
          <a-tag color="pink" style="margin-left: 8px">后端</a-tag>
          <a-divider type="vertical"/>
          <a-icon type="folder"/>
          <a-tag color="cyan" style="margin-left: 8px">node</a-tag>
        </div>
      </a-card>
      <a-layout-footer
        style="text-align: center; background: white"
      >Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </div>
    <div class="sideMenu">
      <a-divider orientation="left">预览</a-divider>
      <ul>
        <li>
          1.
          <a>Lorem ipsum dolor</a>
        </li>
        <li>
          2.
          <a>Lorem ipLorem ipLorem ipsum dolor</a>
        </li>
        <li>
          3.
          <a>Lorem ipsum doloLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorr</a>
        </li>
        <li>
          4.
          <a>Lorem Lorem ipLorem ipLorem ipLorem ipipsum dolor</a>
        </li>
        <li>
          5.
          <a>Lorem ipsum dolor</a>
        </li>
        <li>
          6.
          <a>LoreLorem ipLorem ipLorem ipm ipsum dolor</a>
        </li>
        <li>
          7.
          <a>Lorem ipsum dolor</a>
        </li>
        <li>
          8.
          <a>LoremLorem ipLorem ipLorem ip ipsum dolor</a>
        </li>
        <li>
          9.
          <a>Lorem ipsum dolor</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.contentRight {
  width: 100%;
  overflow: hidden;
}
.card {
  padding-right: 300px;
  text-align: left;
}
.cards {
  margin-top: 10px;
}
.cards:hover {
  background: rgb(238, 250, 254);
}
.sideMenu {
  text-align: left;
  width: 300px;
  position: fixed;
  top: 110px;
  right: 0px;
  padding-left: 10px;
  padding-right: 30px;
}
.sideMenu > ul > li {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
}
.spans {
  margin-left: 6px;
}
.cardBottom {
  font-size: 12px;
}
@media screen and (max-width: 1600px) {
  .sideMenu {
    display: none;
    /* width: 0; */
  }
  .card {
    padding-right: 0!important;
  }
}
</style>
