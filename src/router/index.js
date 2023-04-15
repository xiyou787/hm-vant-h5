import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import layout from '../views/layout.vue'
import detail from '../views/detail.vue'
import article from '../views/article.vue'
import collect from '../views/collect.vue'
import like from '../views/like.vue'
import user from '../views/user.vue'
import { getItem } from '@/utils/storage'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/register', component: register },
    { path: '/detail/:id', component: detail },
    {
      path: '/',
      component: layout,
      redirect: 'article',
      children: [
        { path: 'article', component: article },
        { path: 'collect', component: collect },
        { path: 'like', component: like },
        { path: 'user', component: user }
      ]
    }
  ]
})
const whilelist = ['/login', '/register']
router.beforeEach((to, from, next) => {
  const token = getItem()
  if (token) {
    next()
  } else {
    if (whilelist.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
