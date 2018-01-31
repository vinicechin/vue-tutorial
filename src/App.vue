<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <app-question></app-question>
      </div>
    </div>
  </div>
</template>

<script>
  import AppQuestion from './components/AppQuestion.vue';

  export default {
    data() {
      return {
        currentComponent: 'app-question'
      }
    },

    components: {
      'app-question': AppQuestion
    }
  }
</script>

