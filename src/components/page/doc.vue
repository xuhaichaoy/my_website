<template>
  <div class="contentRight">
    <a-timeline style = "margin-left: 10px; text-align: left;margin-top: 10px">
      <a-timeline-item color="red">
        <a-icon slot="dot" type="clock-circle-o" style="fontSize: '16px'" />
        Technical testing 2019-02-27
      </a-timeline-item>
      <a-timeline-item>Create a services site 2019-02-27</a-timeline-item>
      <a-timeline-item>Solve initial network problems 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
      <a-timeline-item>Network problems being solved 2019-02-27</a-timeline-item>
    </a-timeline>
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
@media screen and (max-width: 1600px) {
  .card {
    padding-right: 0!important;
  }
}
</style>
