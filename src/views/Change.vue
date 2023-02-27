<script >
import { store } from '../store'

export default {
    data() {
        return {
            token: '',
            newpassword: '',
            store
        }
    },
    methods: {
        confirm: function () {
            fetch('https://blog-server-api.amarea.cn/user/edit',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "token": this.token.trim(),
                        "password": this.newpassword.trim(),

                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    alert('密码修改成功')
                    this.$router.push('/home')

                })
                .catch(err => console.log(err))
        }
    },
    mounted() {
        this.token = localStorage.getItem('token')
        if (!this.token) {
            alert('请先登录')
            this.$router.push('/login')
        }
    },
}
</script>
<template>
    <div class="wrap">
        <form style="border:2px solid #000;padding: 40px;border-radius: 8px;">
            <div class="form-group">
                <p style="font-size:22px;margin: 0 auto;">修改密码</p>
            </div>
            
            <div class="form-group">
                <p>
                    新密码:
                    <input :style="{ height: 25 + 'px' }" v-model="newpassword" type="password" placeholder="请输入新密码">
                </p>
            </div>
            <div class="buttonLogin">
                <button class="btn" @click="confirm">确认</button>
                <button class="btn" @click="$router.push('/home')">取消</button>
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