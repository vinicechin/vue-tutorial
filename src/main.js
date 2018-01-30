import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    if (binding.arg == 'background') {
      //v-highlight:background
      el.style.backgroundColor = binding.value;
      el.style.color = 'white';
    } else {
      // no argument passed
      el.style.color = binding.value;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
