import Vue from 'vue'
import App from './App.vue'
import TwinCard from './components/TwinCard.vue'
import Controller from './components/Controller.vue'
import TwinOverview from './components/TwinOverview.vue'
import MenuBar from './components/MenuBar'

import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Concept from './components/Concept.vue'
import LearnMore from './components/LearnMore.vue'

Vue.component('app-header', Header)
Vue.component('app-twincard', TwinCard)
Vue.component('app-twin-overview', TwinOverview)
Vue.component('app-controller', Controller)
Vue.component('app-concept', Concept)
Vue.component('app-about', About)
Vue.component('app-learn-more', LearnMore)
Vue.component('app-footer', Footer)
Vue.component('app-menu-bar', MenuBar)

document.title = "Supply Chain"


new Vue({
  el: '#app',
  render: h => h(App)
})
