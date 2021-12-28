import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Default from '../views/Default.vue'
import Gallery from '../components/Gallery.vue'
import App from '../App.vue'

const routes = [
   {
        path: '/',
        name: 'App',
        component: App
   },
  {
    path: '/?plan',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:user',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.push({ path: 'register', query: { plan: 'private' } })

export default router
