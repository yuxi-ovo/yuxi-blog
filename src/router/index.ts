import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/courseTool',
      name: 'courseTool',
      component: () => import('../views/courseTool.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blog.vue')
    },
    {
      path: '/snippet',
      name: 'snippet',
      component: () => import('../views/snippet.vue')
    },
    {
      path: '/snippet-details',
      name: 'snippetDetail',
      component: () => import('../views/snippet-details.vue')
    }
  ]
})

export default router
