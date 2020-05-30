<template>
  <div>
    <br><br><br>
    <el-col span="4">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      router
      :default-active="this.$route.path">
         <el-menu-item @click="toUserInfo">个人信息</el-menu-item>
         <el-menu-item @click="toChangeInfo" v-if="user">修改个人信息</el-menu-item>
         <el-menu-item @click="toDeleteUser" v-if="user">注销账户</el-menu-item>
         <el-menu-item @click="toBlogList">博客列表</el-menu-item>
         <el-menu-item @click="toUploadedFiles">上传的资源</el-menu-item>
     </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: "UserCenter",
    data(){
      return{
        activeIndex : '/UserCenter/UserInfo/',
        user: false,
        userId : 'User',
      }
    },
    mounted() {
      if(this.userId == 'User'){
        this.user = true;
      }
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toBlogList(){
        this.$router.push({name:'UserBlog',params:{UserId:this.userId}})
      },
      toUserInfo(){
        this.$router.push({name:'UserInfo',params:{UserId:this.userId}})
      },
      toChangeInfo(){
        this.$router.push({name:'ChangeInfo',params:{UserId:this.userId}})
      },
      toDeleteUser(){
        this.$router.push({name:'DeleteUser',params:{UserId:this.userId}})
      },
      toUploadedFiles(){
        this.$router.push({name:'UploadedFiles',params:{UserId:this.userId}})
      }
    },
    components:{
    }
  }
</script>

<style scoped>

</style>
