<template>
    <div class="container-fluid">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  .container-fluid {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 0px;
  }

  .quote-item {
    width: 25%;
  }
</style>
