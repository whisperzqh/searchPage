<template>
  <div class="search" v-title data-title="搜索博客">
    <el-container>
      <el-aside width="200px">
        <myselectsort style="float: left; margin-top: 50px"></myselectsort>
        <mytransfer style="float: left; margin-top: 50px"></mytransfer>
      </el-aside>
      <el-main style="margin-right: 200px;">
        <el-row>
          <div v-for="o in pageSize" :key="o">
            <mycard></mycard>
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
      pageSize: 10,
    }
  },
  components: {
    mycard,
    myselectsort,
    mytransfer,
    Page,
  },
  methods:{
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
