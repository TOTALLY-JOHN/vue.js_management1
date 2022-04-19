import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import blog from '@/views/blog'
import contact from '@/views/contact'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home_view',
      views: home
    },
    {
      path: '/vue.js_management1/production/blog',
      name: 'blog_view',
      views: blog
    },
    {
      path: '/vue.js_management1/production/contact',
      name: 'contact_view',
      views: contact
    }
  ]
})