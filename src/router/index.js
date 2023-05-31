import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/HomeView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Usuarios/AdminView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Stock/ProductsView.vue')
  },
  {
    path: '/products/stock',
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
