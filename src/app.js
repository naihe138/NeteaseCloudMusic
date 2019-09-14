import Vue from 'vue'
import router from './router'
import store from './store'
import APP from './APP.vue'
import EventBus from './utils/bus'

import './public/scss/index.scss'
Vue.prototype.$bus = new EventBus()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { APP },
  render () {
    return (<APP />)
  }
})
