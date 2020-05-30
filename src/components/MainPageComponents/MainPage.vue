<template>
  <div v-title data-title="BA博客">
    <br/>
    <el-container>
      <el-aside width="200px">
        <br/><br/><br/><br/>
        <el-row>分类</el-row>
      <div
        class="each"
        v-for="(item, index) in items"
        :key="index"
        @click="toClassify(item.id)"
      >
        <el-button>{{ item.con }}</el-button>
        <br/>
      </div>
      </el-aside>
      <el-main style="margin-right: 200px">
        <el-row>
          <el-button type="primary" style="float: right" @click="login">登录</el-button>
          <el-button type="success" style="float: right" @click="regist">注册</el-button>
        </el-row>
        <el-row>推荐</el-row>
        <el-row>
          <div v-for="o in pageSize" :key="o">
            <myCard :Card="Card"></myCard>
          </div>
        </el-row>
        <el-row>
          <Page v-on:changePage="changePage"></Page>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import myCard from '../SearchComponents/Card'
import Page from '../ViewComponents/Page'
import {getCategory} from '../../api/api'
export default {
  components: {
    myCard,
    Page
  },
  data () {
    return {
      items: [
        { con: '分类1', id: '1' }
        // { con: '分类2', id: '2' },
        // { con: '分类3', id: '3' },
        // { con: '分类4', id: '4' }
      ],
      pageSize: 10,
      Card: {
        AuthorName: 'User',
        title: 'title',
        simple: '文章简介',
        postDate: '2019-01-01',
        tags: [
          {value: 'HTML', label: 'HTML'},
          {value: 'java', label: 'java'}
        ],
        imgUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      Cards: []
    }
  },
  methods: {
    getCategory () {
      getCategory().then(response => {
        if (response.status === 200) {
          let i = 0
          let sum = response.data.length
          for (i = 0; i < sum; i++) {
            this.items[i].con = response.data[i].name
            this.items[i].id = response.data[i].id
          }
        }
      })
    },
    login () {
      this.$router.push({ path: '/Login' })
    },
    regist () {
      this.$router.push({ path: '/Register' })
    },
    toClassify (itemId) {
      this.$router.push({ path: '/Classify',
        query: {
          categoryID: itemId}})
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    changePage (val) {
      this.pageSize = val
    }
  },
  created () {
    this.getCategory()
  }
}
</script>
