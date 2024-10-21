import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signin from '@/components/Signin.vue'
import BodyQuest from '@/components/bodyQuest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/preguntas',
    name: 'bodyQuest',
    component: BodyQuest
    },
  { path: "/signin", 
    name: 'signin',
    component: Signin 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
