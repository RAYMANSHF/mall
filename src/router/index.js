import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../../src/views/home/Home')
const Profile = () =>
    import ('../../src/views/profile/Profile')
const Product = () =>
    import ('../../src/views/product/Product')
const Contact = () =>
    import ('../../src/views/contact/Contact')

//安装路由
Vue.use(VueRouter)

//创建路由对象
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/product',
        component: Product
    },
    {
        path: '/contact',
        component: Contact
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router