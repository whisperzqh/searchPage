<template>
  <div>
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>注册</span>
        </div>
        <table>
          <tr>
            <td>电话</td>
            <td>
              <el-input type="tel" v-model="user.phonenumber" placeholder="请输入手机号"></el-input>
            </td>
          </tr>
          <tr>
            <td>用户名</td>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td>邮箱</td>
            <td>
              <el-input v-model="user.email" placeholder="请输入邮箱"></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input type="password" v-model="user.password1" placeholder="请输入密码" ></el-input>
            </td>
          </tr>
          <tr>
            <td>请确认密码</td>
            <td>
              <el-input type="password" v-model="user.password2" placeholder="请确认密码" @keydown.enter.native="doLogin"></el-input>
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <el-button style="width: 350px" type="primary" @click="doRegister">注册</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
import {postNewUser} from '../../api/api.js'
export default {
  data () {
    return {
      user: {
        phonenumber: '',
        username: '',
        password1: '',
        password2: '',
        email: ''
      }
    }
  },
  methods: {
    doRegister () {
      postNewUser(this.user.username, this.user.password1, this.user.password2, this.user.phonenumber, this.user.email)
        .then(response => {
          console.log(response)
          alert('注册成功')
          this.$router.push({ path: '/Login' })
        }).catch(error => {
          console.log(error)
          alert('注册信息有误 请重新填写')
        })
    }
  }
}
</script>
