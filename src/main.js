import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from "./router";
import VueSessionStorage from 'vue-sessionstorage'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.use(VueSessionStorage)
Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
