import Vue from 'vue'
import VueRouter from 'vue-router'

import Default from 'views/Default'
import MtHome from 'page/MtHome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Default,
    redirect:"/mthome",
    children:[
      {
        path:"/mthome",
        name:"mthome",
        component:MtHome
      }
    ]
  },
  {
    path:"/landing",
    component: () => import('views/LandingPage.vue')
  },
  {
    path:"/registration",
    component: () => import('views/RegistrationPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
