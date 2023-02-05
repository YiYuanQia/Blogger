<script>
import imgone from './img/love_red.webp'
import imgtwo from './img/love_white.webp'
import { store } from '../store'


export default {
    data() {
        return {
            bloggers: [{
                content: '这是一篇说明文',
                id: 1,
                count: 0
            }],
            // 设置点赞状态
            loveMode: true,
            // 初始图片
            img: imgtwo,
            //选中博客
            seleteWeb: 0,
            // 用户信息
            store,
            count: 0,
            seen: false
        }

    },
    methods: {
        // 单击选中事件
        webselete: function (index) {
            this.seleteWeb = index

        },
        // 点赞
        love: function () {
            if (this.loveMode) {
                this.bloggers[this.seleteWeb].count++

                this.img = imgone
            }
            else {
                this.bloggers[this.seleteWeb].count--
                this.img = imgtwo
            }

            this.loveMode = !this.loveMode
            console.log(this.bloggers[this.seleteWeb].count)
            localStorage.setItem('love-count', this.bloggers[this.seleteWeb].count)
            localStorage.setItem('love-mode', this.loveMode)
        },
        turn: function () {
            this.$router.push('./change')
        },
        onMouseOver() {
            this.seen = true
        },
        onMouseOut() {
            this.seen = false
        },
        // 界面跳转
        note: function () {
            this.$router.push('./login')
        },
        notebook: function () {
            this.$router.push('./note')
        }
    },
    mounted() {
        this.bloggers[this.seleteWeb].count = Number(localStorage.getItem('love-count')) || 0
    }
}
</script>
<template>
    <div style="display:flex">
        <div class="web" v-for="blogger, index in bloggers" @click="webselete(index)">
            {{ blogger.content }}<br>
            <div>
                <img id="love" @click="love" :src="img" width="20" height="20"> {{ blogger.count }}
            </div>
        </div>
        <div class="myself">
            <div class="message">
                <p @click="note">登录</p>
                <li>
                    昵称：{{ store.nickname }}
                </li>
                <li>
                    手机号：{{ store.phone }}
                </li>
                <li>
                    性别:{{ store.sex }}
                </li>
                <li>
                    邮箱地址：{{ store.emailaddress }}
                </li>
                <li>
                    密码：{{ store.password }}
                    <img id="turn" @click="turn" @mouseenter="onMouseOver" @mouseleave="onMouseOut" src="./img/turn.png"
                    alt="" width="20" height="20">
                <p v-show="seen" id="seen">修改密码</p>
                </li>
            </div>
            <p class="message" @click="notebook">我的笔记</p>
        </div>

    </div>

</template>
<style>
.web {
    width: 1000px;
    height: 80px;
    margin-top: 20px;
    margin-left: 150px;
    padding: 20px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 8px;
}

.myself {
    width: 200px;
    height: auto;
    margin-top: 20px;
    margin-left: 30px;
    padding: 20px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 8px;

}

#love {
    margin-left: 50px;
    margin-top: 20px;
    background-color: rgb(255, 225, 205);
}

.message {
    background-color: rgb(236, 236, 236);
    margin-bottom: 20px;
    border-radius: 8px;
    padding: 5px;
    position: relative;
}

.message li{
    list-style: none;
}
.message li:hover {
    background-color: rgb(198, 198, 198);
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
</style>