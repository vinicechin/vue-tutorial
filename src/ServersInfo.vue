<template>
    <div class="row">
        <server-list></server-list>
        <app-server-details></app-server-details>
    </div>
</template>

<script>
  import ServerDetails from './ServerDetails.vue'
  import ServerList from './ServersList.vue'
  export default {
    components: {
      'app-server-details': ServerDetails,
      'server-list': ServerList
    }
  }
</script>
