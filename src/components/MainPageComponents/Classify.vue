<template>
    <div v-title data-title="博客分类">
      <br/>
      <el-container direction="vertical">
        <div v-for="o in pageSize" :key="o" style="margin-left: 240px;">
            <mycard :Card="Cards[o-1]"></mycard>
        </div><br>
        <Page @changePage="changePage"></Page>
      </el-container>
    </div>
</template>

<script>
import mycard from '../SearchComponents/Card'
import Page from '../ViewComponents/Page'
import axiosInstance from '../../api/index'
export default {
  components: {
    Page,
    mycard
  },
  data () {
    return {
      /* items: [
        { con: '分类1', id: '1' },
        { con: '分类2', id: '2' },
        { con: '分类3', id: '3' },
        { con: '分类4', id: '4' }
      ], */
      categoryID: '',
      pageSize: 10,
      Cards: [{
        AuthorName: 'User',
        title: 'title',
        simple: '文章简介',
        postDate: '2019-01-01',
        tags: [
          {value: 'HTML', label: 'HTML'},
          {value: 'java', label: 'java'}
        ],
        imgUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      }]
    }
  },
  methods: {
    getClassifyResult () {
      const axios = axiosInstance
      axios.get('http://127.0.0.1:8000/list/', {
        params: {
          category: this.categoryID
        }.then(response => {
          if (response.status === 200) {
            console.log(response)
            let i = 0
            this.pageSize = response.data.results.length
            for (i = 1; i < this.pageSize; i++) {
              this.Cards[i - 1].AuthorName = response.data.results[i - 1].author.username
              this.Cards[i - 1].title = response.data.results[i - 1].title
              // simple
              this.Cards[i - 1].postDate = response.data.results[i - 1].pub_date
            // tags
            // imgURL
            }
          }
        })
      })
    },
    changePage (val) {
      this.pageSize = val
    }
  },
  created () {
    this.categoryID = this.$route.query.categoryID
  },
  comments: {
    Page
  }
}
</script>
