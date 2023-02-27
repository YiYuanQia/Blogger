
<script>
import { marked } from 'marked'
export default {
    data() {
        return {
            post: {
                user: {
                    avatar: '',
                    nickname: '',
                },
                title: '',
                text: ''
            }
        }
    },

    methods: {
        parseMarkdown(md) {
            return marked.parse(md)
        },

    },
    // 读取浏览器存储信息 if 语句判断 有信息读取
    mounted() {
        this.$route.params.id
        console.log(this.$route.params.id)
        fetch("https://blog-server-api.amarea.cn/post/getPost?pid=" + this.$route.params.id)
            .then((res) => res.json())
            .then(data => {

                console.log(data)
                if (data.code == 0) {
                    this.post = data.data.post
                }
            })

    },
}
</script>
<template>
    <div class="container">
        <div class="post">
            <div class="user">

                <img :src="post.user.avatar" class="userimg">

                <div class="username">
                    {{ post.user.nickname }}
                </div>
            </div>
            <div class="title">
                {{ post.title }}
            </div>
            <div v-html="parseMarkdown(post.text)" class="content">

            </div>

        </div>

    </div>
</template>
<style >
body {
    background-color: rgb(255, 222, 180);
}

.container {
    width: 1000px;
    margin: 0 auto;

}

.userimg {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    border-radius: 50%;
}

.post {
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: white;
}

.user {
    display: flex;
}

.title {
    font-size: 22px;
}
.content img{
    max-width: 100%;
}
</style>