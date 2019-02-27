<template>
  <div class="contentRight">
    <div class="tps">
      <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
      <span style="margin-left: 10px">{{ intru }}</span>
      <a-divider orientation="left">博客简介</a-divider>
      <p>本博客使用的技术为 Vue v3.4.0 + antd</p>
      <p>
        源码地址为
        <a href="https://github.com/xuhaichaoy/my_website">github</a>，仅供参考，不做商业用途！
      </p>
      <a-divider orientation="left">个人简介</a-divider>
      <ul>
        <li>姓名：海超</li>
        <li>学历专业：本科
          <a-divider type="vertical"/>软件工程
        </li>
        <li>联系方式：
          <a-icon type="qq"/>392282002
          <a-divider type="vertical"/>
          <a-icon type="mail"/>xuhaichaoy@163.com
        </li>
        <li>地点：北京市</li>
        <li>
          <span>技能</span>
          <ul>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
          </ul>
        </li>
        <li>
          <span>技能</span>
          <ul>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
          </ul>
        </li>
        <li>
          <span>技能</span>
          <ul>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
            <li>HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
              <a-rate v-model="value" style="margin-left: 10px"/>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <a-list
        v-if="comments.length"
        :dataSource="comments"
        :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
        itemLayout="horizontal"
      >
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-comment
            :author="item.author"
            :avatar="item.avatar"
            :content="item.content"
            :datetime="item.datetime"
          ></a-comment>
        </a-list-item>
      </a-list>
      <a-comment>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <div slot="content">
          <a-form-item>
            <a-textarea :rows="4" @change="handleChange" :value="value1"></a-textarea>
          </a-form-item>
          <a-form-item>
            <a-button
              htmlType="submit"
              :loading="submitting"
              @click="handleSubmit"
              type="primary"
            >Add Comment</a-button>
          </a-form-item>
        </div>
      </a-comment>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      intru: "前端小白一枚，还在学习当中～",
      value: 2,
      comments: [],
      submitting: false,
      value1: "",
      moment
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value1) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: this.value1,
            datetime: moment().fromNow()
          },
          ...this.comments
        ];
        this.value1 = "";
      }, 1000);
    },
    handleChange(e) {
      this.value1 = e.target.value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: disc;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 10px 16px;
  list-style-type: disc;
}
a {
  color: #42b983;
}
.contentRight {
  width: 100%;
  overflow: hidden;
  text-align: left;
  padding-right: 300px;
}
@media screen and (max-width: 1200px) {
  .contentRight {
    padding-right: 0!important;
  }
}
</style>
