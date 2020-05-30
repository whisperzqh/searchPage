<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <el-button style="width: 350px" type="primary" @click="doLogin">登录</el-button>
            </td>
          </tr>
          <tr><el-link type="primary" @click="toRegist">没有账号？请先注册</el-link></tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
import {postUser} from '../../api/api.js'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      userToken: ''
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    doLogin () {
      let _this = this
      postUser(this.user.username, this.user.password)
        .then(response => {
          if (response.status === 200) {
            console.log(response)
            _this.userToken = 'JWT ' + response.data.token
            _this.changeLogin({Authorization: _this.userToken})
            _this.$router.push({ path: '/MainPage' })
            alert('登录成功')
          } else {
            console.log(response)
          }
        }).catch(error => {
          console.log(error)
          alert('账号或密码错误')
        })
    },
    toRegist () {
      this.$router.push({ path: '/Register' })
    }
  }
}
</script>
