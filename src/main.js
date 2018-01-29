import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    deleteQuote(quote) {
      this.$emit('quoteDeleted', quote);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
