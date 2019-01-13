// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'
// import { Button, message, Input } from 'ant-design-vue'
import App from './App'
import router from './router'
import Focus from '@/directive/Focus'
import VueCytoscape from 'vue-cytoscape'
import 'vue-cytoscape/dist/vue-cytoscape.css'
import 'ant-design-vue/dist/antd.css'


Vue.use(Antd)
// Vue.component(Button.name, Button)
// Vue.use(Button)
// Vue.use(Input)
// Vue.use(message)
// Vue.prototype.$message = message
Vue.use(VueCytoscape)
Vue.use(Focus)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
