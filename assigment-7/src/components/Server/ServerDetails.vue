<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>
          <p>Server #{{ server.id }}</p>
          <p>Status: {{ server.status }}</p>
          <hr>
          <button @click="changeTo(0)">Change to Normal</button>
          <button @click="changeTo(1)">Change to Critical</button>
          <button @click="changeTo(2)">Change to Unknown</button>
        </p>
    </div>

</template>

<script>
	import { eventBus } from '../../main';

	export default {
		data: function() {
			return {
				server: null
			}
		},
		created() {
			eventBus.$on('serverSelected', (server) => {
				this.server = server;
			})
		},
    methods: {
      changeTo(status) {
        switch (status) {
          case 0:
            this.server.status = 'Normal';
            break;
          case 1:
            this.server.status = 'Critical';
            break;
          default:
            this.server.status = 'Unknown';
            break;
        }
      }
    }
	}
</script>

<style>

</style>
