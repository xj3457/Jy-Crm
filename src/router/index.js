import Vue from "vue"
import VueRouter from "vue-router"
import Company from "../components/content/Company.vue"
import Login from "../components/content/Login.vue"

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, meta: { title: '登录' } },
    { path: '/home', component: Company, meta: { title: '首页' } },
]

const router = new VueRouter({
    routes
})

export default router
