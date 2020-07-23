import Vue from 'vue'
import App from './App.vue'
import TwinCard from './components/TwinCard.vue'
import Controller from './components/Controller.vue'
import TwinOverview from './components/TwinOverview.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Concept from './components/Concept.vue'
import Contact from './components/Contact.vue'



Vue.component('app-header', Header)
Vue.component('app-twincard', TwinCard)
Vue.component('app-twin-overview', TwinOverview)
Vue.component('app-controller', Controller)
Vue.component('app-concept', Concept)
Vue.component('app-about', About)
Vue.component('app-contact', Contact)
Vue.component('app-footer', Footer)



new Vue({
  el: '#app',
  render: h => h(App)
})
