import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signin from '@/components/Signin.vue'
import BodyQuest from '@/components/bodyQuest.vue'
import Register from '@/views/Register.vue'
import Interes from '@/components/Interes.vue'
import Usuarios from '@/components/Usuarios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/interes',
    name: 'interes',
    component: Interes // Aquí registramos el componente
  },
  {
    path: '/interes/{id}',
    name: 'interes',
    component: Interes // Registro de la ruta para el componente Interes
  },
  {
    path: '/preguntas/{id}',
    name: 'bodyQuest',
    component: BodyQuest
    },
  { path: "/signin", 
    name: 'signin',
    component: Signin 
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: "/register",
    name: 'register',
    component: Register,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
