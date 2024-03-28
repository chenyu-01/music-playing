import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ManageView from '@/views/ManageView.vue'
import useUserStore from '@/stores/user.js'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/manage-music',
    name: 'manage',
    component: ManageView,
    beforeEnter: (to, from, next) => {
      console.log('Manage Guard')
      next()
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
})
router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }
  const userStore = useUserStore()
  if (userStore.userLoggedIn) {
    next()
  } else {
    window.alert('You must be logged in to access this page')
    next({ name: 'home' }) // Redirect to home
  }
})

export default router
