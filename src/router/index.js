import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Pages/Home.vue'
import NotFound from '@/views/Pages/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
