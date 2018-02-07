<template>
  <div>
    <p>Counter is: {{ dCounter }}</p>
    <p>Number of Clicks: {{ clicks }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as types from '../store/types';
  export default {
    // computed: mapGetters([
    //     'doubleCounter',
    //     'stringCounter'
    // ])
    computed:{ 
      ...mapGetters({
          dCounter: types.DOUBLE_COUNTER,
          clicks: types.CLICK_COUNTER
      })
    }
  }
</script>
