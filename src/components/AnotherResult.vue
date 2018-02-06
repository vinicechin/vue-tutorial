<template>
  <div>
    <p>Counter is: {{ dCounter }}</p>
    <p>Number of Clicks: {{ clicks }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    // computed: mapGetters([
    //     'doubleCounter',
    //     'stringCounter'
    // ])
    computed:{ 
      ...mapGetters({
          dCounter: 'doubleCounter',
          clicks: 'stringCounter'
      })
    }
  }
</script>
