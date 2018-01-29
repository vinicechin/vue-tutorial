import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    deleteQuote(quoteIndex) {
      this.$emit('quoteDeleted', quoteIndex);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
