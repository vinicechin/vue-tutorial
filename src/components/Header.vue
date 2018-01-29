<template>
    <div class="main">
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .main {
    padding: 3% 0%;
  }

  .quotesBar {
    border-radius: 5px;
    background-color: #dedede;
    width: 100%;
  }

  .quotesIncrementBar {
    border-radius: 5px;
    background-color: #3355ee;
    color: white;
    width: 90%;
    text-align: center;
  }

  h3 {
    font-weight: bold;
  }
</style>
