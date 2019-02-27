<template>
  <div class="contentRight">
    <div class="card">
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Card Title" :hoverable="true" class="cards">
        <a href="#" slot="extra">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>
    <div class="sideMenu">
      <a-divider orientation="left">预览</a-divider>
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
</style>
