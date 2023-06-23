import { createRouter, createWebHashHistory } from 'vue-router'
import LandingView from '../views/LandingPageView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/login/bank',
    name: 'login/bank',
    component: () => import('../views/LoginBankView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/ClientRegisterView.vue')
  },
  {
    path: '/register/bank',
    name: 'register-bank',
    component: () => import('../views/BankRegisterView.vue')
  },
  {
    path: '/client',
    name: 'client',
    component: () => import('../views/ClientHomeView.vue')
  },
  {
    path: '/client/profile',
    name: 'client-profile',
    component: () => import('../views/ClientProfileView.vue')
  },
  {
    path: '/bank',
    name: 'bank',
    component: () => import('../views/BankHomeView.vue')
  },
  {
    path: '/admin/login',
    name: 'login-admin',
    component: () => import('../views/AdminLoginView.vue')
  },
  {
    path: '/admin/home',
    name: 'admin-home',
    component: () => import('../views/AdminHomeView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
