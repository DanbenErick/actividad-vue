import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cupos from '../views/Cupos.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cupos',
    name: 'About',
    component: Cupos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
