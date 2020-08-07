import Vue from 'vue'
import App from './App.vue'
import TwinCard from './components/twin-card/TwinCard.vue'
import Controller from './components/controller/Controller.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import SupplyChainViewer from './components/supply-chain-viewer/SupplyChainViewer'
import MenuBar from './components/menu-bar/MenuBar'
import Footer from './components/footer/Footer.vue'
import Header from './components/header/Header.vue'
import Concept from './components/concept/Concept.vue'
import LearnMore from './components/learn-more/LearnMore.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.component('app-header', Header)
Vue.component('app-twincard', TwinCard)
Vue.component('app-dashboard', Dashboard)
Vue.component('app-controller', Controller)
Vue.component('app-concept', Concept)
Vue.component('app-learn-more', LearnMore)
Vue.component('app-footer', Footer)
Vue.component('app-menu-bar', MenuBar)
Vue.component('app-supply-chain-viewer', SupplyChainViewer)

document.title = "Supply Chain"


new Vue({
  el: '#app',
  render: h => h(App)
})
