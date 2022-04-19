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
      path: '/vue.js_management1/production/blog',
      name: 'Blog',
      views: Blog
    },
    {
      path: '/vue.js_management1/production/contact',
      name: 'Contact',
      views: Contact
    }
  ]
})