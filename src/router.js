import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from './views/LoginForm.vue'
import Loker from './components/Home/Loker.vue'
import Pelatihan from './components/Home/Pelatihan.vue'
import Pengguna from './components/Home/Pengguna.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'loginForm',
      component: LoginForm
    },
    {
      path: '/loker',
      name: 'loker',
      component: Loker
    },
    {
      path: '/pelatihan',
      name: 'pelatihan',
      component: Pelatihan
    },
    {
      path: '/pengguna',
      name: 'pengguna',
      component: Pengguna
    }
  ]
})
