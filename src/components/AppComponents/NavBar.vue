<template>
  <div id="menulist">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
    background-color="#64C3F2" text-color="#FFFFFF" active-rext-color="#ffd04b" router="true">
    <el-avatar style="float: left; margin-top: 10px; margin-left: 5px">BA</el-avatar>
    <el-menu-item  index="/MainPage" style="margin-left: 10px"><i class="el-icon-house"></i>首页</el-menu-item>
    <el-menu-item @click="toEditBlog"><i class="el-icon-circle-plus-outline"></i>编辑博文</el-menu-item>
    <el-menu-item style="margin-left: 130px">
      <input style="height: 25px; width: 300px" type='text' placeholder="请输入搜索内容" v-model="keywords">
      <!--不能输入空格，为啥！！！-->
      <el-button style="margin-left:10px" size="mini" icon="el-icon-search" round @click="toSearchResult"
                                                                     @keyup.enter="toSearchResult"></el-button>
    </el-menu-item>
    <el-submenu index="/UserCenter" style=" float: right; margin-right: 10px">
      <template slot="title">
        <el-button type="text" style="color: white" @click="toCenter">{{userId}}</el-button>
        <el-button circle style="padding: 0px; line-height: 0px;" @click="toCenter">
          <el-avatar :src="url"></el-avatar>
        </el-button>
      </template>
      <el-menu-item @click="toUserInfo">个人信息</el-menu-item>
      <el-menu-item @click="toBlogList">博文</el-menu-item>
      <el-menu-item @click="toLogout">退出登录</el-menu-item><!--dialog-->
    </el-submenu>
  </el-menu>
  <div class="line"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords:"1 stgbsr  srthsrt",
      activeIndex: '/'+this.$route.path.indexOf('/',1),
      userId: 'User',
      url:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    toCenter(){
      this.$router.push({name: 'UserInfo',params:{UserId:this.userId}})
    },
    toUserInfo(){
      this.$router.push({name: 'UserInfo',params:{UserId:this.userId}})
    },
    toBlogList(){
      this.$router.push({name: 'UserBlog',params:{UserId:this.userId}})
    },
    toLogout(){
      this.$router.push({name:'Logout',params:{UserId:this.userId}})
    },
    toEditBlog(){
      this.$router.push({name:'EditBlog',params:{UserId:this.userId}})
    },
    toSearchResult(){
      let keys = JSON.stringify(this.keywords)
      this.$router.push({path:'/SearchResult',query: {SearchId:this.userId,keys:this.keywords}})
    }
  }
}
</script>

<style>
#menulist {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 999;
}
</style>
