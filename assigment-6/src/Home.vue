<template>
  <div class="container">
      <app-header></app-header>
      <hr>
      <servers-info></servers-info>
      <hr>
      <server-manager></server-manager>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import ServersInfo from './ServersInfo.vue'
  import ServerManager from './ServersManager.vue'
  export default {
    components: {
      'app-header': Header,
      'servers-info': ServersInfo,
      'server-manager': ServerManager
    }
  }
</script>
