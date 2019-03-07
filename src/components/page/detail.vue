<template>
  <div class="contentRight">
    <div class="detail">
      <h2>Koa使用指南</h2>
      <div class="tips">
        <a-icon type="calendar" /> Posted on <span>{{ date }}</span>
        <a-divider type="vertical" />
        <a-icon type="tag" />
        <a-tag color="pink" style="margin-left: 10px">node</a-tag>
        <a-divider type="vertical" />
        <a-icon type="folder" />
        <a-tag color="#108ee9" style="margin-left: 10px">koa2</a-tag>
        <a-divider type="vertical" />
        <a-icon type="message" /><span style="margin-left: 10px">23</span>
        <a-divider />
      </div>
      <a-spin :spinning="spinning" :delay="delayTime">
        <div class="artContent">
          <p v-html = 'content'> </p>
        </div>
      </a-spin>
    </div>
    <div class="sideMenu">
      <a-divider orientation="left">预览</a-divider>
      <a-anchor>
        <a-anchor-link href="#koa" title="Basic demo" />
        <a-anchor-link href="#components-anchor-demo-static-anchor" title="Fixed demo" />
        <a-anchor-link href="#API" title="API">
          <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
          <a-anchor-link href="#Link-Props" title="Link Props" />
        </a-anchor-link>
      </a-anchor>
    </div>
  </div>
</template>

<script>
  import api from '../../httpconfig/request'
  const showdown = require('showdown')
  const converter = new showdown.Converter()
  export default {
    name: "pageIndex",
    props: {
      msg: String
    },
    data() {
      return {
        date: '2019-02-23',
        artName: '海超',
        content: '',
        spinning: true,
        delayTime: 500,
      };
    },
    mounted() {
      this.detail()
    },
    methods: {
      detail() {
        let id = this.$route.path.substring(9)
        let params = {
          id: id
        }
        api.getDetail(params, (res) => {
          const data = res.data
          if(data.code === 100) {
            this.content = converter.makeHtml(data.data.content)
            this.spinning = false
          }

        })
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
  }
  
  .detail {
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
  .artContent {
    text-align: left;
  }
  .spin-content{
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>
