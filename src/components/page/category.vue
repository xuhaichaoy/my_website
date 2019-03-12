<template>
  <div class="contentRight">
    <a-divider>Categories</a-divider>
    <template>
        <div style="margin-top: 40px;">
          <a-badge :count="key.numCount" v-for="(key, index) in alldata" :key = index>
            <a-tag style = "margin-left: 30px" @click="getTips(key)" :color="getColor()">{{key.category}}</a-tag>
          </a-badge>
        </div>
</template>
  </div>
</template>

<script>
  import api from '../../httpconfig/request'
  export default {
    name: "HelloWorld",
    props: {
      msg: String
    },
    data() {
      return {
        alldata: [],
        colorArr: ["pink", "red", "orange", "green", "cyan", "blue", "purple"]
      }
    },
    mounted() {
      this.getCategory()
    },
    methods: {
      getColor() {
        let num = Math.floor(Math.random() * this.colorArr.length)
        return this.colorArr[num]
      },
      getTips(key) {
        if (key.category.trim()) {
          this.$router.push({
            path: "/category/value=" + key.category
          });
        }
      },
      getCategory() {
        api.getCategory('', (res) => {
          if (res.data.code === 100) {
            this.alldata = res.data.data
          }
        })
      }
    },
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
    padding-right: 300px;
  }
  
  @media screen and (max-width: 1200px) {
    .contentRight {
      padding-right: 0!important;
    }
  }
</style>
