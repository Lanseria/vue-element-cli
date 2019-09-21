import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './router/permission' // 权限
import './registerServiceWorker'
import './plugins/element'
import './core/use'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
