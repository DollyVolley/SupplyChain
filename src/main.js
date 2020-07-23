import Vue from 'vue'
import App from './App.vue'
import TwinCard from './components/TwinCard.vue'
import Controller from './components/Controller.vue'
import TwinOverview from './components/TwinOverview.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'


Vue.component('app-twincard', TwinCard)
Vue.component('app-controller', Controller)
Vue.component('app-twin-overview', TwinOverview)
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)



new Vue({
  el: '#app',
  render: h => h(App)
})
