import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    { path: '/login', component: () => import('../views/Login.vue') },
    { path: '/sign', component: () => import('../views/Sign.vue') },
    { path: '/change', component: () => import('../views/Change.vue') },
    { path: '/new', component: () => import('../views/New.vue') },
    { path: '/home', component: () => import('../views/Blogger.vue') },
    { path: '/post/:id', component: () => import('../views/Post.vue') },
    {
        path: '/',
        redirect: '/home'
    }
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export { router }