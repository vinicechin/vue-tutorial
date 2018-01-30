import Vue from 'vue'
import App from './App.vue'

Vue.filter('appendLength', (value) => {
  let cont = value.split("").length;
  return value + " (" + cont + ")";
})

new Vue({
  el: '#app',
  render: h => h(App)
})
