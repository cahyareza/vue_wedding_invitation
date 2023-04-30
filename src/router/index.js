import { createRouter, createWebHistory } from 'vue-router'
import OpenView from '../views/OpenView.vue'
import MainView from '../views/MainView.vue'
import CardoView from '../views/CardoView.vue'
// import CardoOpenView from '../views/CardoOpenView.vue'
import GraneView from '../views/GraneView.vue'
// import GraneOpenView from '../views/GraneOpenView.vue'
import CosmosView from '../views/CosmosView.vue'
// import CosmosOpenView from '../views/CosmosOpenView.vue'
import OceanView from '../views/OceanView.vue'
// import OceanOpenView from '../views/OceanOpenView.vue'
import BrightView from '../views/BrightView.vue'
import BraunView from '../views/BraunView.vue'
import GraneViewLux from '../views/GraneViewLux.vue'

const routes = [
  {
    path: '/main/grane-luxurious/:slug',
    name: 'maingranelux',
    component: GraneViewLux,
  },
  {
    path: '/main/grane-luxurious/:slug/:to',
    name: 'maingraneluxto',
    component: GraneViewLux,
  },
  {
    path: '/main/braun/:slug',
    name: 'mainbraun',
    component: BraunView,
  },
  {
    path: '/main/braun/:slug/:to',
    name: 'mainbraunto',
    component: BraunView,
  },
  {
    path: '/main/bright/:slug',
    name: 'mainbright',
    component: BrightView,
  },
  {
    path: '/main/bright/:slug/:to',
    name: 'mainbrightto',
    component: BrightView,
  },
  {
    path: '/main/ocean/:slug',
    name: 'mainocean',
    component: OceanView,
  },
  {
    path: '/main/ocean/:slug/:to',
    name: 'mainoceanto',
    component: OceanView,
  },
  {
    path: '/main/cosmos/:slug',
    name: 'maincosmos',
    component: CosmosView,
  },
  {
    path: '/main/cosmos/:slug/:to',
    name: 'maincosmosto',
    component: CosmosView,
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
  // {
  //   path: '/cardo/:slug',
  //   name: 'cardoopen',
  //   component: CardoOpenView,
  // },
  // {
  //   path: '/cardo/:slug/:to',
  //   name: 'cardoopento',
  //   component: CardoOpenView,
  // },
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