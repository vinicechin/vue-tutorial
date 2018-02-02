<template>
  <div class="panel panel-default">
    <div class="panel-body text-center correct" v-if="isCorrect">
      <p>It's correct!</p>
      <button class="btn btn-primary" @click="showQuestion">Confirm</button>
    </div>
    <div class="panel-body text-center wrong" v-else>
      <p>It's wrong! Try again!</p>
      <button class="btn btn-primary" @click="showQuestion">Confirm</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['isCorrect'],
    methods: {
      showQuestion() {
        this.$emit('showNewQuestion');
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 30px;
  }

  .correct {
    background-color: lightgreen;
    border: 1px solid gray;
  }

  .wrong {
    background-color: #f33;
    border: 1px solid gray;    
  }
</style>
