import Vue from 'vue'
import router from './router'
import store from './store'
import APP from './APP.vue'

import './public/scss/index.scss'
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
