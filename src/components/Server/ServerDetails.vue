<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>
        	<ul>
        		<li>{{ server.id }}</li>
        		<li>{{ server.status }}</li>        		
        	</ul>
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
		}
	}
</script>

<style>

</style>
