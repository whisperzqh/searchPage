<template>
    <div  v-title data-title="个人中心-博客">
      <UserNav></UserNav>
      <el-col span="20">
        <el-row>
          <div v-for="o in pageSize" :key="o">
              <my-card :Card="Card"></my-card>
              <div v-if="rightUser">
                <el-button type="danger" @click=""
                           style="margin-top: 75px; margin-bottom: 75px;">删除博客</el-button>
              </div>
          </div>
        </el-row>
        <br>
        <el-row>
          <Page @changePage="changePage" style="margin-right: 300px;"></Page>
        </el-row>
      </el-col>
    </div>
</template>

<script>
  import myCard from '../SearchComponents/Card'
  import UserNav from './UserCenter'
  import Page from "../ViewComponents/Page";
  export default {
    name: "UserBlog",
    data(){
      return{
        pageSize: 10,
        rightUser : true,//this.user.UserName === this.viewuser.UserName?true:false,
        user:{
          UserName:'User',
        },
        viewuser:{
          UserName: 'User',
        },
        //下面是新加的吗
        Card:{
          AuthorName:'User',
          title: 'title',
          simple:'文章简介',
          postDate:'2019-01-01',
          tags:[
            {value: 'HTML', label: 'HTML'},
            {value: 'java', label: 'java'},
          ],
          imgUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        },
        Cards:[],
      }
    },
    components:{
      Page,
      myCard,
      UserNav,
    },
    methods:{
      changePage(val){
        this.pageSize=val;
      }
    }
  }
</script>

<style scoped>

</style>
