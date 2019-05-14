import Vue from 'vue'
import Router from 'vue-router'
import PageContainer from '@/containers'
import Home from '@/containers/Home'
import About from '@/containers/About'
import NotFound from '@/containers/NotFound'
import PostCreate from '@/containers/Post/Create'
import PostDetail from '@/containers/Post/Detail'

Vue.use(Router)

export const routes = [
  {
    name: 'postCreate',
    path: '/post/create',
    component: PostCreate
  },
  {
    path: '/',
    component: PageContainer,
    children: [
      {
        name: 'postDetail',
        path: 'post/:id',
        component: PostDetail
      },
      {
        name: 'home',
        path: '',
        component: Home
      },
      {
        name: 'about',
        path: '/about',
        component: About
      },
      {
        name: 'notFound',
        path: '*',
        component: NotFound
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes
})
