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
export default {
  data () {
    return {
      user: {
        username: 'zhangsan',
        password: '123'
        // 为了登录方便，可以直接在这里写好用户名和密码的值
      }
    }
  },
  methods: {
    doLogin () {
      alert(JSON.stringify(this.user)) // 可以直接把this.user对象传给后端进行校验用户名和密码
    },
    toRegist () {
      this.$router.push({ path: '/Regist' })
    }
  }
}
</script>
