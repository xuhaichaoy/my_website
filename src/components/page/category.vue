<template>
  <div class="contentRight">
    <a-divider>Categories</a-divider>
    <template>
      <div style="margin-top: 40px;">
        <a-badge :count="99">
          <a-tag style = "margin-left: 30px" color="pink">pink</a-tag>
        </a-badge>
        <a-badge :count="99">
          <a-tag style = "margin-left: 30px" color="red">red</a-tag>
        </a-badge>
        <a-badge :count="99">
          <a-tag style = "margin-left: 30px" color="orange">orange</a-tag>
        </a-badge>
        <a-badge :count="99">
          <a-tag style = "margin-left: 30px" color="green">green</a-tag>
        </a-badge>
        <a-badge :count="99">
          <a-tag style = "margin-left: 30px" color="cyan">cyan</a-tag>
        </a-badge>
        <a-badge :count="99">
          <a-tag style = "margin-left: 30px" color="blue">blue</a-tag>
        </a-badge>
        <a-badge :count="99">
          <a-tag style = "margin-left: 30px" color="purple">purple</a-tag>
        </a-badge>
      </div>
    </template>
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
  padding-right: 400px;
}
@media screen and (max-width: 1600px) {
  .contentRight {
    padding-right: 0!important;
  }
}
</style>
