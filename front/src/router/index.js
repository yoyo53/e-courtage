import { createRouter, createWebHashHistory } from 'vue-router'
import LandingView from '../views/LandingPageView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
  {
    path: '/login/client',
    name: 'login-client',
    component: () => import('../views/ClientLoginView.vue')
  },
  {
    path: '/login/bank',
    name: 'login-bank',
    component: () => import('../views/BankLoginView.vue')
  },
  {
    path: '/register/client',
    name: 'register-client',
    component: () => import('../views/ClientRegisterView.vue')
  },
  {
    path: '/register/bank',
    name: 'register-bank',
    component: () => import('../views/BankRegisterView.vue')
  },
  {
    path: '/client',
    name: 'client-home',
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
    path: '/login/admin',
    name: 'login-admin',
    component: () => import('../views/AdminLoginView.vue')
  },
  {
    path: '/admin/banques',
    name: 'admin-banques',
    component: () => import('../views/AdminBanksView.vue')
  },
  {
    path: '/admin/clients',
    name: 'admin-clients',
    component: () => import('../views/AdminClientsView.vue')
  },

  {
    path: '/admin/demandes',
    name: 'admin-demandes',
    component: () => import('../views/AdminDemandesView.vue')
  },
  {
    path: '/client/verification/:token',
    name: 'client-verification',
    component: () => import('../views/ClientVerificationView.vue')
  },
  {
    path: '/client/forgot',
    name: 'client-recovery-forgot',
    component: () => import('../views/ClientRecoveryForgotView.vue')
  },
  {
    path: '/client/recover/:token',
    name: 'client-recovery-form',
    component: () => import('../views/ClientRecoveryFormView.vue')
  },
  { path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404View.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
