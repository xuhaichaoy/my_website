<template>
  <div class="contentRight">
    <a-row>
      <a-col :span="18">
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <a-card title="Card Title" :hoverable="true" class = "cards">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <div class = "sideMenu">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>4</li>
            <li>3</li>
          </ul>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
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
.cards {
  margin-top: 10px;
}
.cards:hover {
  background: rgb(238,250,254);
}
.sideMenu {
  position: fixed;
}
.sideMenu > ul > li {
  display: block;
}
</style>
