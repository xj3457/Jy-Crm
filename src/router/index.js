import Vue from "vue"
import VueRouter from "vue-router"
import Company from "../components/content/Company.vue"
import Login from "../components/content/Login.vue"

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login, meta: {title: '登录'}},
    {path: '/home', component: Company, meta: {title: '首页'}},
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // to将要访问的路径
    // from代表从哪个路径跳转而来
    // next是一个函数，表示放行
    if (to.path === '/login') return next()
    // const tokenStr = window.sessionStorage.getItem('token')
    // if (!tokenStr) return next('/login')
    next()
})

export default router
