import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
	methods: {
		serverSelect(server) {
			this.$emit('serverSelected', server);
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
