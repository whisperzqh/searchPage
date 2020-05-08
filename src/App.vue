<template>
  <div id="app">
    <el-container>
      <el-header><mynavbar></mynavbar></el-header>
      <el-container>
        <el-aside width="200px">
        <myselectsort style="float: left; margin-top: 50px"></myselectsort>
        <mytransfer style="float: left; margin-top: 50px"></mytransfer>
      </el-aside>
        <el-main>
        <div v-for="o in 10" :key="o">
          <mycard></mycard>
        </div>
        <el-pagination background layout="prev, pager, next" :total="500" style="float: left; margin-top: 20px; margin-left: 250px"></el-pagination>
        <router-view/>
      </el-main>
      </el-container>
    </el-container>
    <el-backtop visibility-height="0" right="100" bottom="100"></el-backtop>
  </div>
</template>

<script>
import mynavbar from './components/Navbar.vue'
import mycard from './components/Card.vue'
import myselectsort from './components/SelectSort.vue'
import mytransfer from './components/Transfer.vue'
export default {
  name: 'App',
  components: {
    mynavbar,
    mycard,
    myselectsort,
    mytransfer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
