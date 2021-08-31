import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from "../views/Landing";
import Swap from "../views/Swap";

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
