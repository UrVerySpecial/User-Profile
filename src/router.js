import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import User from './views/User.vue'
import Details from './views/Details.vue'
import Edit from './views/Edit.vue'
import NewUser from './views/NewUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      name: 'new',
      path: '/user/new',
      component: NewUser
    },
    {
      name: 'user',
      path: '/user/:id',
      component: User,
      children: [
        {
          name: 'details',
          path: 'details',
          component: Details
        },
        {
          name: 'edit',
          path: 'edit',
          component: Edit
        }
      ]
    }
  ]
})
