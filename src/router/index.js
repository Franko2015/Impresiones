import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/HomeView.vue')
  },
  {
    path: '/admin/:usuario',
    name: 'admin',
    component: () => import('../views/Usuarios/AdminView.vue')
  },
  {
    path: '/products/:usuario',
    name: 'products',
    component: () => import('../views/Stock/ProductsView.vue')
  },
  {
    path: '/stock/:usuario',
    name: 'stock',
    component: () => import('../views/Stock/StockView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogIn/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/LogIn/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
