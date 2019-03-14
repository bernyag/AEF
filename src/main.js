import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'
Vue.use(VueAgile)
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
