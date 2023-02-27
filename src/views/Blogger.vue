<script>
import { store } from '../store'

export default {
    data() {
        return {
            posts: [],

            username: '登录',
            nickname: '--',
            sex: '--',
            email: '3097928420@qq.com',
            password: '--',
            avatar: '',
            logined: false,
            seen: false,
            uid: '',
            store,
        }
    },
    methods: {

        //鼠标放置移开事件
        onMouseOver() {
            this.seen = true
        },
        onMouseOut() {
            this.seen = false
        },

        // 界面跳转
        logout: function () {
            localStorage.clear()
            location.reload()
        },

        turn: function () {
            if (this.nickname == '--') {
                alert('请先登录')
            }
            else {
                this.$router.push('/change')
            }

        },
    },
    // 读取浏览器存储信息 if 语句判断 有信息读取
    mounted() {
        fetch("https://blog-server-api.amarea.cn/post/getList?page=1")
            .then((res) => res.json())
            .then(data => {

                console.log(data)
                if (data.code == 0) {
                    this.posts = data.data.posts
                }
            })

        this.uid = localStorage.getItem('uid')
        fetch('https://blog-server-api.amarea.cn/user/getInfo?uid=' + this.uid)
            .then(res => res.json())
            .then(data => {
                if (data.code == 0) {
                    this.avatar = data.data.userInfo.avatar
                    this.nickname = data.data.userInfo.nickname
                    this.sex = data.data.userInfo.sex
                    this.password = data.data.userInfo.password
                    this.logined = true
                }
                console.log(data)
            })


    },
}
</script>
<template>
    <div class="myself">
        <img :src="avatar" v-show="logined" class="avatar">
        <p @click="$router.push('/login')" id="login" style="font-size: 14px;" v-show="!logined">{{ username }}</p>
        <div class="message" v-show="logined">

            <li>
                昵称：{{ nickname }}
            </li>
            <li>
                性别:{{ sex }}
            </li>
            <li>
                邮箱地址：{{ email }}
            </li>
            <li>
                密码：{{ password }}
                <img id="turn" @click="turn" @mouseenter="onMouseOver" @mouseleave="onMouseOut" src="./img/turn.png"
                    alt="" width="20" height="20">
                <p v-show="seen" id="seen">修改密码</p>
            </li>
        </div>
        <p class="message" @click="$router.push('/new')" v-if="logined">新建文章</p>
        <p class="message" @click="logout" v-if="logined">退出登录</p>

    </div>
    <div class="container">
        <div v-for="post in posts" class="post" @click="$router.push('/post/' + post.pid)">
            <div class="user">

                <img :src="post.user.avatar" class="userimg">

                <div class="username">
                    {{ post.user.nickname }}
                </div>
            </div>
            <div class="title">
                {{ post.title }}
            </div>

            <div>
                {{ post.text }}
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

.myself {
    width: 200px;
    height: auto;
    float: right;
    margin-top: 20px;
    margin-left: 30px;
    padding: 20px;
    background-color: white;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 8px;

}

#login {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    background-color: rgb(236, 236, 236);
}



.message {
    background-color: rgb(236, 236, 236);
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 5px;
    position: relative;
}

.message li {
    list-style: none;
    padding-bottom: 5px;
}

.message li:hover {
    background-color: rgb(198, 198, 198);
    cursor: pointer;
}

#turn:hover {
    transform: scale(1.2);
}

#seen {
    position: absolute;
    bottom: 10px;
    left: 140px;
    font-size: 12px;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 2px 0;
}
</style>