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
    width: 75%;
    justify-content: center;
    align-items: center;
  }

  .btnContainer {
    text-align: center;
  }

  textarea {
    width: 100%;
    height: 100px;
    border-radius: 5px;
  }

  p {
    font-weight: bold;
  }
</style>
