<template>
  <div class="contentRight">
    <div class="card">
      <a-spin :spinning="spinning" :delay="delayTime">
        <a-card v-for="(key,index) in allData" :key="index" @click="detail(key.id)" :title="key.title" :hoverable="true" class="cards" :id="key.title">
          <a href="#" slot="extra">more</a>
          <div class="test_demo" v-html="contents(key.content)"></div>
          <a-divider dashed/>
          <div class="cardBottom">
            <a-icon type="message" />
            <span class="spans">{{ key.discuss }}</span>
            <a-divider type="vertical" />
            <a-icon type="tag" />
            <a-tag color="pink" style="margin-left: 8px">{{ key.tips }}</a-tag>
            <a-divider type="vertical" />
            <a-icon type="folder" />
            <a-tag color="cyan" style="margin-left: 8px">{{ key.category }}</a-tag>
            <div style="float: right">
              <span style="margin-left:4px">{{ key.postDate }}</span>
            </div>
          </div>
        </a-card>
      </a-spin>
      <a-layout-footer style="text-align: center; background: white">Ant Design ©2019 Created by Ant UED</a-layout-footer>
    </div>
    <div class="sideMenu">
      <a-divider orientation="left">预览</a-divider>
      <a-anchor wrapperClass="contentRight" :offsetTop="120">
        <a-anchor-link :title="key.title" v-for="(key, index) in allData" :href="'#' + key.title" :key="index" />
      </a-anchor>
    </div>
  </div>
</template>

<script>
  import api from '../../httpconfig/request'
  const showdown = require('showdown')
  const converter = new showdown.Converter()
  export default {
    name: "pageValue",
    props: {
      msg: String
    },
    data() {
      return {
        allData: [],
        spinning: true,
        delayTime: 500,
      };
    },
    watch: {
      $route(to, from) {
        this.getSearch()
      }
    },
    computed: {
      contents() {
        return function(content) {
          return converter.makeHtml(content)
        }
      }
    },
    mounted() {
      this.getSearch()
    },
    methods: {
      getSearch() {
        const value = this.$route.path.split("=")[1].trim()
        let params = {
          category: value
        }
        api.getCvalue(params, (res) => {
          const code = res.data.code
          if (code === 100) {
            this.spinning = false
            this.allData = res.data.data
          }
        })
      },
      detail(id) {
        this.$router.push({
          path: "/article/" + id
        });
      },
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
  
  .sideMenu>ul>li {
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
  
  @media screen and (max-width: 1200px) {
    .sideMenu {
      display: none;
      /* width: 0; */
    }
    .card {
      padding-right: 0 !important;
    }
  }
  
  #components-back-top-demo-custom .ant-back-top {
    bottom: 100px;
  }
  
  #components-back-top-demo-custom .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
  
  .test_demo {
    height: 200px;
    overflow: hidden;
  }
  
  .spin-content {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>