<template>
  <div class="contentRight">
    <div class="detail">
      <a-card :hoverable="true" class="cards" v-if="!loading">
        <a-skeleton active :paragraph="{rows: 20}"/>
      </a-card>
      <h2 style="">{{ detailData.artical_title }}</h2>
      <div class="tips">
        <a-icon type="calendar" style=""/> Posted on <span>{{ detailData.createDate }}</span>
        <a-divider type="vertical" />
        <a-icon type="tag" />
        <a-tag color="pink" style="margin-left: 10px">{{ detailData.tname }}</a-tag>
        <a-divider type="vertical" />
        <a-icon type="folder" />
        <a-tag color="#108ee9" style="margin-left: 10px">{{ detailData.category_name }}</a-tag>
        <a-divider type="vertical" />
        <a-icon type="message" /><span style="margin-left: 10px">{{ detailData.viewCount ?  detailData.viewCount : 0}}</span>
        <a-divider />
      </div>
      <div class="artContent">
        <p v-html='content'> </p>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../httpconfig/request'
  // const showdown = require('showdown')
  // const converter = new showdown.Converter()
  export default {
    name: "pageIndex",
    props: {
      msg: String
    },
    data() {
      return {
        content: '',
        loading: false,
        detailData: {
          postDate: '',
          category: '',
          discuss: '',
          tips: '',
          title: ''
        }
      };
    },
    mounted() {
      this.detail()
    },
    watch:{
      $route(to,from){
        this.detail()
        document.documentElement.scrollTop = 0
        this.loading = false
      }
    },
    methods: {
      detail() {
        const _this = this
        let id = this.$route.path.substring(9)
        let params = {
          id: id
        }
        api.getDetail(params, (res) => {
          const data = res.data
          if (data.code === 100) {
            this.detailData = data.data
            this.content = data.data.htContent
          }
          this.loading = true
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
    /* padding-right: 300px; */
    text-align: center;
  }

  /* @media screen and (max-width: 1200px) {
    .detail {
      padding-right: 0;
    }
  } */
  
  .cards {
    margin-top: 10px;
  }
  
  .cards:hover {
    background: rgb(238, 250, 254);
  }
/*   
  .sideMenu {
    text-align: left;
    width: 300px;
    position: fixed;
    top: 110px;
    right: 0px;
    padding-left: 10px;
    padding-right: 30px;
  } */
  
  /* .sideMenu>ul>li {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 28px;
  } */
  
  .spans {
    margin-left: 6px;
  }
  
  .cardBottom {
    font-size: 12px;
  }
  
  @media screen and (max-width: 1200px) {
    .sideMenu {
      /* display: none; */
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
    padding-left: 2%;
    padding-right: 2%;
  }
  
  .spin-content {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
  
</style>
