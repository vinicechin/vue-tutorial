<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .container {
    width: 50%;
    justify-content: center;
    align-items: center;
  }

  div {
    border: 1px solid blue;
  }
</style>
