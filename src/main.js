import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 1000;
    }

    setTimeout(() => {
      if (binding.arg == 'background') {
        //v-highlight:background
        el.style.backgroundColor = binding.value;
        el.style.color = 'white';
      } else {
        // no argument passed
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
