<template>
  <div class="contentRight">
    <div v-if="!loading">
      <a-card :hoverable="true" class="cards">
        <a-skeleton active avatar title :paragraph="{rows: 3}"/>
      </a-card>
      <a-card :hoverable="true" class="cards">
        <a-skeleton active avatar title :paragraph="{rows: 3}"/>
      </a-card>
      <a-card :hoverable="true" class="cards">
        <a-skeleton active avatar title :paragraph="{rows: 3}"/>
      </a-card>
      <a-card :hoverable="true" class="cards">
        <a-skeleton active avatar title :paragraph="{rows: 3}"/>
      </a-card>
      <a-card :hoverable="true" class="cards">
        <a-skeleton active avatar title :paragraph="{rows: 3}"/>
      </a-card>
    </div>
    <a-list
      v-if="comments.length"
      :dataSource="comments"
      :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
      itemLayout="horizontal"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment
          :author="item.nickName"
          :avatar="item.image"
          :content="item.comment_content"
          :datetime="item.date"
        >
        <template slot="actions">
          <span>
            <a-tooltip title="Like">
              <a-icon
                type="like"
                :theme="action === 'liked' ? 'filled' : 'outlined'"
                @click="like"
              />
            </a-tooltip>
            <span style="padding-left: '8px';cursor: 'auto'">
              {{likes}}
            </span>
          </span>
          <span>
            <a-tooltip title="Dislike">
              <a-icon
                type="dislike"
                :theme="action === 'disliked' ? 'filled' : 'outlined'"
                @click="dislike"
              />
            </a-tooltip>
            <span style="padding-left: '8px';cursor: 'auto'">
              {{dislikes}}
            </span>
          </span>
          <span>Reply to</span>
        </template>
        </a-comment>
      </a-list-item>
    </a-list>
    <a-comment>
      <a-avatar
        icon="user"
        slot="avatar"
        :src="image"
        :alt="nickName"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" @change="handleChange" :value="value" ></a-textarea>
        </a-form-item>
        <a-form-item>
          <a-button
            htmlType="submit"
            :loading="submitting"
            @click="handleSubmit"
            type="primary"
          >
            Add Comment
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>

<script>
  // import moment from "moment"
  import api from '../../httpconfig/request'
  export default {
    name: "about",
    props: {
      msg: String
    },
    data() {
      return {
        likes: 0,
        dislikes: 0,
        action: null,
        // moment,
        comments: [],
        submitting: false,
        value: '',
        image: '',
        nickName: '',
        loading: false
      };
    },
    mounted() {
      this.$store.dispatch("getInfo")
      this.getComment()
      this.image = this.$store.state.LoginedUser.image
      this.nickName = this.$store.state.LoginedUser.nickName
    },
    methods: {
      like() {
        this.likes = 1
        this.dislikes = 0
        this.action = 'liked'
      },
      dislike() {
        this.likes = 0
        this.dislikes = 1
        this.action = 'disliked'
      },
      handleSubmit() {
        if (!this.value) {
          return;
        }
        let params = {
          comment: this.value,
        }
        this.submitting = true
        api.addComment(params, (res) => {
          if(res.data.data.code === 100) {
            this.$message.success('发布成功')
            this.value = ''
            this.submitting = false
            this.getComment()
          }else {
            this.$message.warning('请先登录！！！')
            this.submitting = false
          }
        })
      },
      handleChange(e) {
        this.value = e.target.value
      },
      getComment() {
        api.getComment('', (res) => {
          if(res.data.code === 100) {
            this.comments = res.data.data
            this.image = this.$store.state.LoginedUser.image
            this.nickName = this.$store.state.LoginedUser.nickName
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
  .cards {
    margin-top: 10px;
  }

  .cards:hover {
    background: rgb(238, 250, 254);
  }

  
  @media screen and (max-width: 1200px) {
    .contentRight {
      padding-right: 0!important;
    }
  }
</style>
