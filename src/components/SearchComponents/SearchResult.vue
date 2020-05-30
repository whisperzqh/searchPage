<template>
  <div class="search" v-title data-title="搜索博客">
    <el-container>
      <el-aside width="200px">
        <!--<myselectsort style="float: left; margin-top: 50px"></myselectsort>-->
        <el-select v-model="selectValue" placeholder="请选择排序方式" style="width: 150px; margin-left: 10px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <!--<mytransfer style="float: left; margin-top: 50px"></mytransfer>-->
        <el-checkbox-group v-model="checkList">
          <el-checkbox v-for="item in categories" :label="item.name" :key="item.id"></el-checkbox>
        </el-checkbox-group>
      </el-aside>
      <el-main style="margin-right: 200px; color: white">
        <el-row>
          <div v-for="o in pageSize" :key="o">
            <mycard :Card="Cards[o-1]"></mycard>
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
import mycard from './Card.vue'
// import myselectsort from './SelectSort.vue'
// import mytransfer from './Transfer.vue'
import Page from '../ViewComponents/Page'
import axiosInstance from '../../api/index'
import {getCategory} from '../../api/api'
export default {
  name: 'search',
  data () {
    return {
      keys: '', // 原来是数组 改成字符串了
      options: [{
        value: 'pub_date',
        label: '最早发布'
      }, {
        value: '-pub_date',
        label: '最新发布'
      }, {
        value: 'read_num',
        label: '阅读量最低'
      }, {
        value: '-read_num',
        label: '阅读量最高'
      }],
      selectValue: '',
      pageSize: 2,
      categories: [{
        id: 1,
        name: 'Html'
      }],
      checkList: [],
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
  components: {
    mycard,
    // myselectsort,
    // mytransfer,
    Page
  },
  mounted () {
    this.Init()
  },
  updated () {
    this.Init()
  },
  watch: {// 用来每次重新输入关键词都可以重新查询
    '$route': {
      handler (route) {
        const that = this
        if (route.name === 'SearchResult') {
          that.Init()
        }
      },
      deep: true
    }
  },
  methods: {
    getSearchResult () {
      const axios = axiosInstance
      axios.get('http://127.0.0.1:8000/list/', {
        params: {
          category: this.checkList,
          ordering: this.selectValue,
          search: this.keys,
          p: undefined,
          page_size: undefined
        }
      }).then(response => {
        if (response.status === 200) {
          console.log(response)
          let i = 0
          this.pageSize = response.data.results.length
          for (i = 0; i < this.pageSize; i++) {
            this.Cards[i].AuthorName = response.data.results[i].author.username
            this.Cards[i].title = response.data.results[i].title
            // simple
            this.Cards[i].postDate = response.data.results[i].pub_date
            // tags
            // imgURL
          }
        }
      })
    },
    getCategory () {
      getCategory().then(response => {
        if (response.status === 200) {
          let i = 0
          let sum = response.data.length
          for (i = 0; i < sum; i++) {
            this.categories[i].name = response.data[i].name
            this.categories[i].id = response.data[i].id
          }
        }
      })
    },
    Init () {
      console.log(this.$route.query.keys)
      this.keys = this.$route.query.keys.split(' ')
      console.log(this.keys)
      console.log(this.Cards)
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
    this.keys = this.$route.query.keys
    this.getSearchResult()
  }
}
</script>

<style>
#search {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
