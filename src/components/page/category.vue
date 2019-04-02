<template>
  <div class="contentRight">
    <div style="text-align: left;padding: 20px;">
      <h3 style="text-align: left">共 {{ count }} 个</h3>
      <a-tag style="margin: 8px" v-for="(key, index) in alldata" :key="index" @click="choose(key.tname)">{{ key.tname }} ({{key.num}})</a-tag>
    </div>
  </div>
</template>

<script>
import api from "../../httpconfig/request";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      alldata: [],
      count: 0,
      colorArr: ["pink", "red", "orange", "green", "cyan", "blue", "purple"]
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    getColor() {
      let num = Math.floor(Math.random() * this.colorArr.length);
      return this.colorArr[num];
    },
    getTips(key) {
      if (key.category.trim()) {
        this.$router.push({
          path: "/category/value=" + key.category
        });
      }
    },
    getCategory() {
      api.getCategory("", res => {
        if (res.data.code === 100) {
          this.alldata = res.data.data;
          this.count = res.data.count
        }
      });
    },
    choose(tag) {
      this.$router.push({
        path: "/search/searchValue:tag=" + tag
      });
    }
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
  padding-right: 200px;
}

@media screen and (max-width: 1200px) {
  .contentRight {
    padding-right: 0 !important;
  }
}
</style>
