import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  },
  {
    path: '/index',
    name: 'index',
    component: Home
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('../views/About/Company.vue')
  },
  {
    path: '/brand',
    name: 'brand',
    component: () => import('../views/About/Brand.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/technique',
    name: 'technique',
    component: () => import('../views/Technique.vue')
  },
  {
    path: '/affair',
    name: 'affair',
    component: () => import('../views/News/Affair.vue')
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('../views/News/Media.vue')
  },
  {
    path: '/union',
    name: 'union',
    component: () => import('../views/Contact/Union.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../views/Contact/Address.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
