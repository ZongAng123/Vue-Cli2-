import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import My from '../pages/My.vue'
import Manage from '../pages/manage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', //去除#符号
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Manage',
      component: Manage
    }
  ]
})
