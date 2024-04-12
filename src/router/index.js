import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '@/stores/user.js'
const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const ManageView = () => import('@/views/ManageView.vue')
const SongView = () => import('@/views/SongView.vue')
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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
  },
  {
    name: 'song',
    path: '/song/:id',
    component: SongView,
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
