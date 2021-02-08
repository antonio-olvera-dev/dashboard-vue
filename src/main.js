import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//---boostrap---
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
