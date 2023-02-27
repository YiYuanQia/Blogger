<script >
import { store } from '../store'
export default {
  data() {
    return {
      username: '',
      password: '',
      store
    }
  },
  methods: {

    login: function () {
      if (this.username.trim() == '' || this.password.trim() == '') {
        alert('用户名或密码不能为空，请输入账号密码')
        return
      }
      fetch('https://blog-server-api.amarea.cn/user/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "username": this.username.trim(),
          "password": this.password.trim(),
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.code == 0) {
            localStorage.setItem('uid', data.data.id)
            localStorage.setItem('token', data.data.token)

            // 用户信息
            alert('登陆成功')
            this.$router.push('/home')
          }
          else {
            throw new Error('账号或密码错误')
          }

        })
        .catch(err => alert(err))
    },
    sign: function () {
      this.$router.push('/sign')
    },

  },
  


}
</script>
<template>
  {{ uid }}
  <div class="wrap">
    <form style="border:2px solid #000;padding: 40px;border-radius: 8px;">
      <div class="form-group">
        <p style="font-size:22px;margin: 0 auto;">用户登录</p>
      </div>
      <div class="form-group">
        <p>
          账户:
          <input :style="{ height: 25 + 'px' }" v-model="username" type="text" placeholder="请输入账户名">
        </p>
      </div>
      <div class="form-group">
        <p>
          密码:
          <input :style="{ height: 25 + 'px' }" v-model="password" type="password" placeholder="请输入密码">
        </p>
      </div>
      <div class="buttonLogin">
        <button class="btn" @click="login">登录</button>

        <button class="btn" @click="sign">注册</button>
      </div>
    </form>
  </div>
</template>
<style>


.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

}

.form-group {
  display: flex;
  height: 60px;

}

.buttonLogin {
  display: flex;
  /* 两端对齐 */
  justify-content: space-between;
  /* 不换行 */
  flex-wrap: nowrap;
}

.btn {
  padding: 0 15px;
}
</style>