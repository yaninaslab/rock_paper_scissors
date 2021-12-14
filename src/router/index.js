import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from '@/views/LoginPage.vue'
import GamePage from '@/views/GamePage.vue'
import PageNotFound from '@/views/PageNotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/game",
    name: "GamePage",
    component: GamePage
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
