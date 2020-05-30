<template>
  <div v-title data-title="编辑博客">
    <el-container style="margin-right:250px;margin-left:250px; margin-top:30px;">
      <el-container style="" direction="vertical">
        <el-form ref="infoForm" :model="Blog" :rules="rules" label-width="120px" enctype="multipart/form-data">
          <el-form-item label="博客标题" prop="title">
            <el-input
                type="textarea"
                placeholder="请输入博客标题"
                v-model="Blog.title"
                maxlength="30"
                show-word-limit
                style="width: 70%; float: left"
              >
            </el-input>
          </el-form-item>

          <el-form-item label="内容简介" prop="simple">
            <el-input
                type="textarea"
                placeholder="默认为博客正文的前30字"
                v-model="Blog.simple"
                maxlength="30"
                show-word-limit
                style="width: 70%; float: left"
              >
            </el-input>
          </el-form-item>

          <el-form-item label="博客标签" prop="tags">
            <div class="grid-content" style="text-align:left; overflow:visible;">
              请选择标签：<br>
              <!--需要输入框长一点-->
              <el-select
                v-model="Blog.tags"
                multiple
                filterable
                allow-create
                default-first-option
                size="medium"
                placeholder="请选择文章标签">
                <el-option
                  v-for="item in Blog.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-form-item>

          <el-form-item label="博客正文" prop="content">
            <div class="edit_container">
              <quill-editor v-model="Blog.content"
                            ref="myQuillEditor"
                            class="editer"
                            :options="editorOption" @ready="onEditorReady($event)">
              </quill-editor>
            </div>
          </el-form-item>

          <el-form-item>
            <el-upload
              class="upload-demo"
              drag
              ref="upload"
              action="url"
              :auto-upload="false"
              :before-upload="beforeUpload"
              :file-list="fileList"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit('infoForm')">发布文章</el-button>
            <el-button type="danger" >取消</el-button>
          </el-form-item>
        </el-form>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { addQuillTitle } from '../quill-title.js'
// import {getBlog, submitBlog} from '.../api/api.js'
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean'],
  ['link', 'image', 'video']
]
export default {
  name: 'test',
  data () {
    return {
      url: 'https://jsonplaceholder.typicode.com/posts/',
      activeName: 'first',
      UserId: 'User',
      urls: {
        Home: '/',
        EditBlog: '/EditBlog'
      },
      Blog: {
        title: '',
        simple: '',
        content: '',
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        tags: [],
        files: []
      },
      editorOption: {
        theme: 'snow',
        boundary: document.body,
        modules: {
          toolbar: {
            container: toolbarOptions
          }
        },
        placeholder: 'Insert text here ...',
        readOnly: false
      },
      quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      header: {token: sessionStorage.token},
      // 表单验证
      rules: {
        title: [
          {required: true, message: '请输入标题', trigger: 'blur'}
        ],
        tags: [
          {required: true, message: '标签不能为空', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '必须填写正文或资源的简介', trigger: 'blur'}
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      fileList: []
      // param:''
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted () {
    // 初始化
    addQuillTitle()
  },
  methods: {
    onEditorReady (editor) {
    },
    onSubmit (FileName) {
      this.$refs[FileName].validate((valid) => {
        if (valid) {
          // 4.1，下面append的东西就会到form表单数据的this.param中；
          // this.param.append('title', this.Blog.title)
          // this.param.append('simple',this.Blog.simple)
          // this.param.append('tags',this.Blog.tags)
          // this.params.append('content',this.Blog.content)
          // this.$refs.upload.submit()
          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          this.axios.post(this.url, this.Blog, config).then(res => {
            console.log(res)
            if (res.code === 200) {
              this.$router.push('/MainPage')
            } else {
              this.$message({
                message: res.code,
                type: 'error'
              })
            }
          })
        } else {
          this.$message({
            message: 'Fail to post',
            type: 'error'
          })
        }
      })
    },
    beforeUpload (file) {
      this.Blog.files.push(file.name, file.raw)// ???????
      return false
    }
  },
  components: {
  }
}
</script>

<style scoped>
  .el-message-box {
    z-index: 2000;
  }
</style>
