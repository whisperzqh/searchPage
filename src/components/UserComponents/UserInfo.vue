<template>
  <div v-title data-title="个人中心">
    <UserNav></UserNav>
    <el-col span="20">
      <el-main style="background-color: white; margin-right: 200px;">
        <el-row>
         <div class="block"><el-avatar shape="square" :size="100" :src="squareUrl"></el-avatar>
           <!--双击查看大图-->
         </div>
        </el-row>
        <el-row>{{UserName}}</el-row>
        <el-row>
            粉丝数：{{fansNum}}&#8195;&#8195;
            关注数：{{followsNum}}
        </el-row>
        <br>
        <el-row>
          注册日期：{{registerDate}}
        </el-row>
        <br>
        <el-row>
          个性签名：
          <el-input
            type="textarea"
            readonly
            style="width: 400px;"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="Intro">
          </el-input>
        </el-row>
      </el-main>
    </el-col>
  </div>
</template>

<script>
import {getUserInfo} from '../../api/api.js'
import UserNav from './UserCenter'
export default {
  name: 'UserInfo',
  data () {
    return {
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      UserName: 'User',
      fansNum: 13,
      followsNum: 70,
      Intro: '这个人什么也没写~',
      registerDate: '2018-10-23'
    }
  },
  components: {
    UserNav
  },
  methods: {
    getInfo () {
      getUserInfo().then(response => {
        if (response.status === 200) {
          console.log(response)
          this.UserName = response.data.username
          this.Intro = response.data.introduction
          this.registerDate = response.data.reg_date
        } else {
          this.$message({
            message: '获取信息失败' + response.message,
            type: 'error'
          })
        }
      })
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style scoped>

</style>
