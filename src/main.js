import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import md5 from 'md5'

Vue.use(Buefy, {defaultIconPack: 'fas'})

// filters
Vue.filter('fullName', function (firstName, lastName) {
  return `${firstName} ${lastName}`
})
const GRAVATAR_URL = 'http://www.gravatar.com/avatar'
Vue.filter('gravatarUrl', function (email) {
  return `${GRAVATAR_URL}/${md5(email)}`
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
