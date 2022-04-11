import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import userRoutes from '@/modules/user/routes'
import cartRoutes from '@/modules/cart/routes'
import productRoutes from '@/modules/product/routes'

const routes = [
  ...cartRoutes,
  ...productRoutes,
  ...userRoutes
]

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router
