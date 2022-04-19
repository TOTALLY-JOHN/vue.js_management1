// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).mount('#app')

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})