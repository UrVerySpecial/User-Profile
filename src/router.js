import Vue from 'vue'
import Router from 'vue-router'
import UserList from './views/UserList.vue'
import User from './views/User.vue'
import UserDetails from './views/Details.vue'
import UserEdit from './views/Edit.vue'
import NewUser from './views/NewUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'UserList',
      component: UserList
    },
    {
      name: 'New',
      path: '/user/new',
      component: NewUser
    },
    {
      name: 'User',
      path: '/user/:id',
      component: User,
      children: [
        {
          name: 'UserDetails',
          path: 'details',
          component: UserDetails
        },
        {
          name: 'UserEdit',
          path: 'edit',
          component: UserEdit
        }
      ]
    }
  ]
})
