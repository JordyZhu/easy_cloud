import Vue from 'vue'
import Router from 'vue-router'
import Index from '../containers/Index'
import Home from '../containers/Home'
import About from '../containers/About'
import NotFound from '../containers/NotFound'
import PostCreate from '../containers/Post/Create'

Vue.use(Router)

export const routes = [
  {
    path: '/post/create',
    component: PostCreate
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
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
  }
]

export default new Router({
  mode: 'history',
  routes
})
