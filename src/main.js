// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import Focus from '@/directive/Focus'
import VueCytoscape from 'vue-cytoscape'
import 'vue-cytoscape/dist/vue-cytoscape.css'
// import 'ant-design-vue/dist/antd.css'
// import Toast from '@/components/toast'
import 'iv-toast/lib/index.css'
import Toast from 'iv-toast'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(Antd)
Vue.use(ElementUI);
Vue.use(VueCytoscape)
Vue.use(Focus)
Vue.use(Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
