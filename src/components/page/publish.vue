<template>
  <div class="contentRight">
    <div class="setting">
      <a-breadcrumb>
        <a-breadcrumb-item><a href="javascript:;" @click="push('index')" class="clearStyle">Home</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="javascript:;" @click="push('publish')" class="clearStyle">Publish</a></a-breadcrumb-item>
      </a-breadcrumb>
      <div class="editor-wrap">
        <textarea id="editor" name="editor" ref="mycode"></textarea>
      </div>
      <div>
        <a-button @click="publish" style="margin-top: 20px; margin-left: 26px">发布</a-button>
      </div>
      <a-modal title="发布文章" v-model="visible" :footer="null">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item label="标题" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="[
                        'title',
                        {rules: [{ required: true, message: 'Please input your title!' }]}
                      ]" />
          </a-form-item>
          <a-form-item label="分类" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="[
                        'category',
                        {rules: [{ required: true, message: 'Please input your category!' }]}
                      ]" />
          </a-form-item>
          <a-form-item label="标签" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="[
                        'tips',
                        {rules: [{ required: true, message: 'Please input your tips!' }]}
                      ]" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 4 }">
            <a-button type="primary" html-type="submit">
              发布
            </a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>

<script>
  import {
    CodeMirror
  } from 'vue-codemirror'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/theme/monokai.css'
  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/mode/vue/vue'
  import 'codemirror/keymap/sublime.js'
  import 'codemirror/addon/hint/css-hint'
  import 'codemirror/addon/hint/javascript-hint'
  import 'codemirror/addon/hint/html-hint'
  import api from '../../httpconfig/request'
  const storage = window.localStorage
  export default {
    name: "publish",
    data() {
      return {
        val: '',
        visible: false,
        form: this.$form.createForm(this),
      };
    },
    mounted() {
      // console.log(this.$store.state.LoginedUser.id)
      if(!this.$store.state.LoginedUser.id) {
        this.$router.push({
          path: "/index"
        })
      }
      const _this = this
      let myTextarea = document.getElementById('editor');
      this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
        mode: 'markdown', //编辑器语言
        // theme: 'monokai', //编辑器主题
        extraKeys: {},
        lineNumbers: true //显示行号
      });
      this.CodeMirrorEditor.setSize('auto', '60vh')
      if(storage.getItem('article')) {
        this.CodeMirrorEditor.setValue(storage.getItem('article'))
        this.val = storage.getItem('article')
      }
      this.CodeMirrorEditor.on("change", function() {
        _this.val = _this.CodeMirrorEditor.getValue()
        storage.setItem("article", _this.val)
      });
    },
    methods: {
      publish() {
        this.visible = true
      },
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            let time = new Date()
            let str = ''
            str += time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
            values.val = this.val
            values.postDate = str
            values.artical_id = this.$store.state.LoginedUser.id
            api.publish(values, (res) => {
              if(res.data.data.code === 100) {
                this.visible = false
                this.$message.success('发布成功！')
                this.CodeMirrorEditor.setValue('')
                this.val = ''
                storage.removeItem("article")
              }else {
                this.visible = false
                this.$message.success('发布失败！')
              }
            })
          }
        });
      },
      push(router) {
        this.$router.push({
          path: "/" + router
        })
      }
    },
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
    padding-right: 100px;
  }
  
  @media screen and (max-width: 1200px) {
    .contentRight {
      padding-right: 0!important;
    }
  }
  
  .editor-wrap {
    width: 100%;
    height: 60vh;
    display: inline-block;
    padding-bottom: 20px;
    box-sizing: border-box;
    background: beige;
    margin-top: 30px;
  }
  
  .clearStyle {
    text-decoration: none;
  }
</style>
