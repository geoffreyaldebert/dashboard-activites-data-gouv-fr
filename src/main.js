import Vue from 'vue'

import store from './store'
//import { getData } from './import.js'

import HomepageWidget from './components/HomepageWidget'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'

import vueCustomElement from 'vue-custom-element'
//Vue.use(getData(store))

Vue.config.productionTip = false

Vue.use(vueCustomElement)

Vue.customElement('homepage-widget', HomepageWidget)
Vue.customElement('bar-chart', BarChart)
Vue.customElement('line-chart', LineChart)