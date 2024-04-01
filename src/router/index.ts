import HomePage from '@/views/home-page.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/users-page.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about-page.vue')
    }
  ]
})

export default router
