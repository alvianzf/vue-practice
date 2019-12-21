import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('custom-button', require('./components/Button.vue').default);

new Vue({
  render: h => h(App),
}).$mount('#app')
