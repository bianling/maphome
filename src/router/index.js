import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/HomePage/home'
  },
  {
    path: '/HomePage', // 主界面
    component: () => import('@/views/HomePage'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'goHome',
        component: () => import('@/views/goHome')
      },
      {
        path: 'info',
        component: () => import('@/views/info')
      },
      {
        path: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
