// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Focus from '@/directive/Focus'
import cytoscape from 'cytoscape'
import qtip from 'cytoscape-qtip'

qtip(cytoscape)

Vue.use(Focus)
Vue.prototype.$cy = cytoscape

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
