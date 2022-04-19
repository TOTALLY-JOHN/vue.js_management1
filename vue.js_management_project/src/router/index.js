import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Blog from '@/views/Blog'
import Contact from '@/components/Contact'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      views: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      views: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      views: Contact
    }
  ]
})