import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/message/:id',
    component: () => import('../views/ViewMessage.vue')
  },
  {
    path:'/Login',
    name:'Login',
    component: () => import('../views/login.vue')
  },
  {
    path:'/kelas',
    name:'kelas',
    component: () => import('../views/kelas.vue')
  },
  {
    path: '/kelas/:id',
    name: 'kelas Detail',
    component: () => import('../views/KelasDetail.vue')
  }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
