// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueQuillEditor from 'vue-quill-editor'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(VueQuillEditor)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
