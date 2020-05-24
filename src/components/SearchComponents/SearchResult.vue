<template>
  <div class="search" v-title data-title="搜索博客">
    <el-container>
      <el-aside width="200px">
        <myselectsort style="float: left; margin-top: 50px"></myselectsort>
        <mytransfer style="float: left; margin-top: 50px"></mytransfer>
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
import myselectsort from './SelectSort.vue'
import mytransfer from './Transfer.vue'
import Page from '../ViewComponents/Page'
export default {
  name: 'search',
  data(){
    return{
      keys:[],
      pageSize: 2,
      Cards:[{
          AuthorName:'User',
          title: 'title',
          simple:'文章简介',
          postDate:'2019-01-01',
          tags:[
            {value: 'HTML', label: 'HTML'},
            {value: 'java', label: 'java'},
          ],
          imgUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        },{
          AuthorName:'User2',
          title: 'title2',
          simple:'文章简介2',
          postDate:'2019-01-02',
          tags:[
            {value: 'HTML', label: 'HTML'},
            {value: 'python', label: 'python'},
          ],
          imgUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        }
      ],
    }
  },
  components: {
    mycard,
    myselectsort,
    mytransfer,
    Page,
  },
  mounted() {
    this.Init()
  },
  updated() {
    this.Init()
  },
  watch:{//用来每次重新输入关键词都可以重新查询
    "$route":{
      handler(route){
        const that = this
        if(route.name == 'SearchResult'){
          that.Init()
        }
      },
      deep:true
    }
  },
  methods:{
    Init(){
      console.log(this.$route.query.keys)
      this.keys=this.$route.query.keys.split(" ")
      console.log(this.keys)
      console.log(this.Cards)
      // this.$axios({
      //   url:'http://www.baidu.com',//把关键词数组变成字符串？？？
      //   params:{keys:this.keys}}).then(res=>{
      //     this.Cards=res.data;//得到对象,应该是一个数组
      // }).catch(error => error);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    changePage(val){
      this.pageSize=val;
    }
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
