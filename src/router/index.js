import { createRouter, createWebHistory } from 'vue-router'
import Contact from '../views/Contact.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
