<template>
  <div id="menulist">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
    background-color="#64C3F2" text-color="#FFFFFF">
    <el-avatar style="float: left; margin-top: 10px; margin-left: 5px">BA</el-avatar>
    <el-menu-item index="1" style="margin-left: 10px"><i class="el-icon-house"></i>首页</el-menu-item>
    <el-menu-item index="2"><i class="el-icon-circle-plus-outline"></i>编辑博文</el-menu-item>
    <el-menu-item index="3" style="margin-left: 130px">
      <input style="height: 25px; width: 300px" type='text' placeholder="请输入搜索内容">
      <el-button style="margin-left:10px" size="mini" icon="el-icon-search" round></el-button>
    </el-menu-item>
    <el-submenu index="4" style=" float: right; margin-right: 10px">
      <template slot="title"></template>
      <el-menu-item index="4-1">个人信息</el-menu-item>
      <el-menu-item index="4-2">博文</el-menu-item>
      <el-menu-item index="4-3">退出登录</el-menu-item>
    </el-submenu>
    <el-link style="float: right; margin-top: 25px; margin-right: 10px">用户名</el-link>
    <el-avatar style="float: right; margin-top: 10px; margin-right: 10px" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
  </el-menu>
  <div class="line"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#menulist {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 9999;
}
</style>
