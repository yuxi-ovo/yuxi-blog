import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import loading from '../views/loading.vue'
import { useMainStore } from '@/stores/main'

const router = createRouter({
  history:
    import.meta.env.VITE_ENV === 'production'
      ? createWebHashHistory(import.meta.env.BASE_URL)
      : createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'loading'
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
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    }
  ]
})

router.beforeEach((to, from, next) => {
  const mainStore = useMainStore()
  if (!mainStore.isRenderPage && to.path !== '/loading') {
    next('/loading')
  } else {
    next()
  }
})

export default router
