import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    // {
    //   path: "/",
    //   redirect: "/login"
    // },
    {
      // path: "/login",
      path: "/",
      name: "登录",
      component: () => import('../components/Login')
    }
]

const router = new VueRouter({
   mode: 'history',  //在使用history模式，使用重定向到login页面解决第一个访问的组件就Login组件。login页面刷新一下就会404. 这个问题是和后端的security认证页面有关。
  base: process.env.BASE_URL,
  routes
})

export default router
