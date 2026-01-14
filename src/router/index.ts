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
      component: () => import('../views/home.vue'),
      meta: { requiresReady: true }
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

router.beforeEach((to) => {
  const mainStore = useMainStore()
  if (to.meta.requiresReady && !mainStore.isRenderPage) {
    console.log(to)
    return {
      path: '/loading',
      query: { redirect: to.fullPath }
    }
  }

  if (to.path === '/loading' && mainStore.isRenderPage) {
    const redirect = to.query.redirect as string
    return redirect || '/home'
  }
  mainStore.setIsRenderPage(true)
})

export default router
