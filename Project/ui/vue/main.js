import Vue from 'vue'
import App from './App.vue'
import FundamentalVue from 'fundamental-vue'

Vue.use(FundamentalVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
