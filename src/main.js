import Vue from 'vue'

import store from './store'
//import { getData } from './import.js'

import BarChart from './components/BarChart'
import DataTable from './components/DataTable'

import vueCustomElement from 'vue-custom-element'
//Vue.use(getData(store))

Vue.config.productionTip = false

Vue.use(vueCustomElement)

Vue.customElement('bar-chart', BarChart)
Vue.customElement('data-table', DataTable)