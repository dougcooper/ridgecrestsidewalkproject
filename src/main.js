// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
import $ from 'jquery'
window.jQuery = $
window.$ = $

function checkScroll() {
  var startY = $('.navbar').height() * 2 // The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $('.navbar').addClass('scrolled')
  } else {
    $('.navbar').removeClass('scrolled')
  }
}

if ($('.navbar').length > 0) {
  $(window).on('scroll load resize', function() {
    checkScroll()
    console.log('hello')
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
