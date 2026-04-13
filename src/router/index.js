import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/views/home.vue'
import About from '../components/views/about.vue'
import Deals from '../components/views/deals.vue'
import Contact from '../components/views/contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/deals', component: Deals },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router