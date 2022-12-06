import { createRouter, createWebHistory } from 'vue-router'
import OpenView from '../views/OpenView.vue'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/:slug',
    name: 'open',
    component: OpenView,
  },
  {
    path: '/main/:slug',
    name: 'main',
    component: MainView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
})

export default router
