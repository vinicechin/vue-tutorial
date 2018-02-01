<template>
  <div class="panel panel-default">
    <div class="panel-body text-center">
      <p>It's correct!</p>
      <button class="btn btn-primary" @click="showNewQuestion">Confirm</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showNewQuestion() {
        this.$emit('showNewQuestion');
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 30px;
  }

  div {
    background-color: lightgreen;
    border: 1px solid gray;
  }
</style>
