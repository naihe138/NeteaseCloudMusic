import Vue from 'vue'
import VueRouter from 'vue-router'

const Bar = () => import(/* webpackChunkName: "group-bar" */ '../view/bar.vue')
const Baz = () => import(/* webpackChunkName: "group-baz" */ '../view/baz.vue')
console.log(Baz)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/baz', component: Baz },
    { path: '/bar', component: Bar }
  ]
})

export default router
