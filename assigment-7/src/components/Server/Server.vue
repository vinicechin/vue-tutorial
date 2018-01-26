<template>
    <li class="list-group-item" style="cursor: pointer" @click="serverSelect">
        Server #{{ server.id }}
    </li>
</template>

<script>
	import { eventBus } from '../../main';

	export default {
		props: ['server'],
		methods: {
			serverSelect() {
				eventBus.serverSelect(this.server);
			}
		}
	}
</script>

<style>

</style>
