<template>
  <div>
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>注册</span>
        </div>
        <table>
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
              <el-button style="width: 350px" type="primary" @click="doLogin">注册</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password1: '',
        password2: '',
        email: ''
      }
    }
  },
  methods: {
    doLogin () {
      alert(JSON.stringify(this.user)) // 可以直接把this.user对象传给后端进行校验用户名和密码
    }
  }
}
</script>
