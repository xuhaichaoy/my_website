<template>
  <div class="contentRight">
    <div class="setting">
      <div class="editor-wrap">
        <textarea id="editor" name="editor" ref="mycode">
                      </textarea>
      </div>
      <div style="text-align: right">
        <a-button @click="publish">发布</a-button>
      </div>
      <a-modal title="发布文章" v-model="visible" :footer="null">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item label="标题" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="[
                  'title',
                  {rules: [{ required: true, message: 'Please input your note!' }]}
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
      let myTextarea = document.getElementById('editor');
      this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
        mode: 'markdown', //编辑器语言
        // theme: 'monokai', //编辑器主题
        extraKeys: {},
        lineNumbers: true //显示行号
      });
      this.CodeMirrorEditor.setSize('auto', '70vh')
    },
    methods: {
      publish() {
        this.visible = true
        this.val = this.CodeMirrorEditor.getValue()
      },
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            let time = new Date()
            console.log(new Date().getFullYear())
            console.log(new Date().getMonth() + 1)
            console.log(new Date().getDate())
            
            let str = ''
            str += time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
            values.val = this.val
            values.postDate = str
            values.artical_id = this.$store.state.LoginedUser.id
            api.publish(values, (res) => {
              console.log(res)
            })
            console.log('Received values of form: ', values);
          }
        });
      },
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
    height: 70vh;
    display: inline-block;
    padding-bottom: 20px;
    box-sizing: border-box;
    background: beige;
  }
</style>
