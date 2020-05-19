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
            <myCard></myCard>
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
export default {
  components: {
    myCard,
    Page,
  },
  data () {
    return {
      items: [
        { con: '分类1', id: '1' },
        { con: '分类2', id: '2' },
        { con: '分类3', id: '3' },
        { con: '分类4', id: '4' }
      ],
      pageSize: 10,
    }
  },
  methods: {
    // created(){
    //   document.title = 'BA博客';
    // },
    // mounted(){
    //   document.title = 'BA博客';
    // },
    login () {
      this.$router.push({ path: '/Login' })
    },
    regist () {
      this.$router.push({ path: '/Register' })
    },
    toClassify (itemId) {
      this.$router.push({ path: '/Classify/' + itemId })
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
  },
}
</script>
