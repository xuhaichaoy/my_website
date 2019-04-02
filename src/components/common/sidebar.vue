<template>
  <div class="content">
    <a-row :style="{ width: '100%' }">
      <a-col class="siedebar" :xs="0" :sm="0" :md="0" :lg="5" :xl="5" :xll="4">
        <div style="border-right: 1px solid #e8e8e8; padding-bottom: 20px">
          <a-avatar
            class="avatarstyle"
            :class="{ avatarTran: avatarPic}"
            :size="132"
            :src="user.image"
            @click="avatar"
          />
          <h4 class="title">{{ user.nickName }}</h4>
          <span class="tips">{{ user.introduction }}</span>
          <div class="hrefs">
            <a>
              <a-icon type="github" class="hrefaa"/>
              <span>
                <a :href="user.github">github</a>
              </span>
            </a>
            <a class="hrefa">
              <a-icon type="wechat" class="hrefaa"/>
              <span>
                <a href="javascript:;">wechat</a>
              </span>
            </a>
          </div>
        </div>
        <div class="article">
          <a-divider orientation="left" style="margin: 0; padding: 16px 0">最近文章</a-divider>
          <ul>
            <li
              v-for="(key, index) in alldata"
              :key="index"
              @click="detail(key.aid)"
              style="cursor: pointer"
            >
              <a href="javascript:;">{{ key.artical_title }}</a>
            </li>
          </ul>
        </div>
        <div style="border-right: 1px solid #e8e8e8; text-align: left;padding-left: 20px; padding-right: 20px">
          <a-divider orientation="left" style="margin: 0; padding: 16px 0">标签</a-divider>
          <a-tag class="atips" color="red" v-for="(key, index) in alltag" :key="index" @click="choose(key.tname)">{{ key.tname }}</a-tag>
        </div>
      </a-col>
      <a-col :xs="0" :sm="0" :md="0" :lg="5" :xl="5" :xll="4"></a-col>
      <a-col :span="19" class="scroll" :xs="24" :sm="25" :md="24" :lg="19" :xll="20">
        <router-view></router-view>
      </a-col>
    </a-row>
    <div>
      <a-back-top/>
    </div>
  </div>
</template>
<script>
import api from "../../httpconfig/request";
export default {
  name: "app",
  components: {},
  data() {
    return {
      user: {},
      alldata: [],
      alltag:[],
      avatarPic: false
    };
  },
  mounted() {
    this.user = this.$store.state.currentUser;
    this.getlist();
    this.getTag();
  },
  methods: {
    avatar() {
      this.avatarPic = !this.avatarPic;
    },
    getlist() {
      const params = {
        id: this.user.id
      };
      api.getlist(params, res => {
        const data = res.data;
        if (data.code === 100) {
          this.alldata = data.data;
        }
      });
    },
    getTag() {
      api.getCategory("", res => {
        if (res.data.code === 100) {
          this.alltag = res.data.data;
        }
      });
    },
    detail(id) {
      this.$router.push({
        path: "/article/" + id
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
<style>
.avatarstyle {
  transition: all 600s ease 0s;
}
.avatarTran {
  transform: rotate(72000deg);
}
.title {
  margin-top: 16px;
  font-size: 20px;
}
.tips {
  font-size: 12px;
  display: block;
}
.hrefs {
  margin-top: 10px;
}
.hrefs a {
  display: inline-block;
  color: rgba(0, 0, 0, 0.65);
  text-decoration: none;
}
.article a {
  text-decoration: none;
}
.article a:visited {
  text-decoration: none !important;
}
.hrefa {
  margin-left: 10px;
  padding-right: 6px;
}
.hrefs > a span {
  display: inline-block;
  vertical-align: middle;
}
.hrefaa {
  color: rgba(0, 0, 0, 0.65);
  vertical-align: middle !important;
  margin-right: 4px;
}
.siedebar {
  box-sizing: border-box;
  height: calc(100vh - 105px);
  overflow: auto;
  position: fixed;
  top: 110px;
  left: 0;
  /* overflow: auto; */
  /* width: 100%; */
}
.atips {
  display: inline-block;
  margin-top: 6px !important;
  margin-bottom: 6px !important;
}
.scroll {
  /* height: calc(100vh - 105px); */
  /* overflow: auto; */
  padding-left: 40px !important;
  padding-right: 20px !important;
  /* box-sizing: border-box; */
}
@media screen and (max-width: 1200px) {
  .scroll {
    padding-left: 20px !important;
  }
}

.article {
  border-right: 1px solid #e8e8e8;
  margin-bottom: -14px;
}
.article li {
  padding-left: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 20px;
  box-sizing: border-box;
  text-align: left;
  line-height: 28px;
  font-size: 14px;
}
.article li:hover {
  background: #f0f2f5;
  color: #1890ff !important;
}
.article li:hover a {
  color: #1890ff !important;
}
.article li a {
  color: #8590a6;
}
.article ul {
  padding-left: 0;
}
</style>
