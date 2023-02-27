<script>
export default {
    data() {
        return {
            title: '',
            content: '',
            token: '',
        }
    },
    methods: {
        publish: function () {
            if (this.title.trim() == '') {
                alert('标题不可为空')
                return
            }
            if (this.content.trim() == '') {
                alert('内容不可为空')
                return
            }
            fetch('https://blog-server-api.amarea.cn/post/newPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "token": this.token.trim(),
                    "title": this.title.trim(),
                    "text": this.content.trim(),
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.code == 0) {
                        alert('发布成功')
                        this.$router.push('/home')
                    }
                    else {
                        alert(data.msg)
                    }
                    console.log(data)
                })
                .catch(err => alert(err))
        },

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
    <div class="container">
        <div class="title">
            标题
            <input type="text" v-model="title">
        </div>
        <div class="content">
            内容
            <textarea v-model="content"></textarea>
        </div>
        <button @click="publish">发布</button>
    </div>
</template>
<style>
body {
    background-color: rgb(255, 222, 180);
}

.container {
    width: 1000px;
    margin: 0 auto;

}

.title input {
    width: 100%;

    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
}

.content textarea {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
}
</style>