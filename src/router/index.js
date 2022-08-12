import { createRouter, createWebHistory } from 'vue-router'
import OpenView from '../views/OpenView.vue'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'open',
    component: OpenView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
