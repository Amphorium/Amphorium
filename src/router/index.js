import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from "../views/Landing";
import Swap from "../views/Swap";
import Page404 from "../views/Page404";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/swap',
    name: 'Swap',
    component: Swap
  },
  {
    path: '*',
    name: 'Page404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
