import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home'
import About from '../containers/About'
import NotFound from '../containers/NotFound'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
]

export default new Router({
  mode: 'history',
  routes
})
