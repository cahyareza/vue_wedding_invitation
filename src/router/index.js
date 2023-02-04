import { createRouter, createWebHistory } from 'vue-router'
import OpenView from '../views/OpenView.vue'
import MainView from '../views/MainView.vue'
import CardoView from '../views/CardoView.vue'
import CardoOpenView from '../views/CardoOpenView.vue'
import GraneView from '../views/GraneView.vue'
import GraneOpenView from '../views/GraneOpenView.vue'

const routes = [
  {
    path: '/grane/:slug',
    name: 'graneopen',
    component: GraneOpenView,
  },
  {
    path: '/grane/:slug/:to',
    name: 'graneopento',
    component: GraneOpenView,
  },
  {
    path: '/main/grane/:slug',
    name: 'maingrane',
    component: GraneView,
  },
  {
    path: '/main/grane/:slug/:to',
    name: 'maingraneto',
    component: GraneView,
  },
  {
    path: '/cardo/:slug',
    name: 'cardoopen',
    component: CardoOpenView,
  },
  {
    path: '/cardo/:slug/:to',
    name: 'cardoopento',
    component: CardoOpenView,
  },
  {
    path: '/main/cardo/:slug',
    name: 'maincardo',
    component: CardoView,
  },
  {
    path: '/:slug',
    name: 'open',
    component: OpenView,
  },
  {
    path: '/:slug/:to',
    name: 'opento',
    component: OpenView,
  },
  {
    path: '/main/:slug',
    name: 'main',
    component: MainView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
})

export default router