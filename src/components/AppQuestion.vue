<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <p class="panel-title text-center">How much is {{ question }}?</p>
    </div>
    <div class="panel-body">
      <div class="col-xs-12 col-sm-4 text-center">
        <button 
          id="option" 
          class="btn btn-primary btn-lg" 
          @click="verifyAnswer(answers[0])">
          {{ answers[0] }}
        </button>
      </div>
      <div class="col-xs-12 col-sm-4 text-center">
        <button 
          id="option" 
          class="btn btn-primary btn-lg"
          @click="verifyAnswer(answers[1])">
          {{ answers[1] }}
        </button>
      </div>
      <div class="col-xs-12 col-sm-4 text-center">
        <button 
          id="option" 
          class="btn btn-primary btn-lg"
          @click="verifyAnswer(answers[2])">
          {{ answers[2] }}
        </button>
      </div>
      <div class="col-xs-12 col-sm-4 text-center">
        <button 
          id="option" 
          class="btn btn-primary btn-lg"
          @click="verifyAnswer(answers[3])">
          {{ answers[3] }}
        </button>
      </div>
      <div class="col-xs-12 col-sm-4 text-center">
        <button 
          id="option" 
          class="btn btn-primary btn-lg"
          @click="verifyAnswer(answers[4])">
          {{ answers[4] }}
        </button>
      </div>
      <div class="col-xs-12 col-sm-4 text-center">
        <button 
          id="option" 
          class="btn btn-primary btn-lg"
          @click="verifyAnswer(answers[5])">
          {{ answers[5] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        question: '<> + <>',
        answers: [1, 2, 3, 4, 5, 6],
        correctAnswer: 2
      }
    },

    methods: {
      verifyAnswer(value) {
        let isCorrect;
        if (this.correctAnswer == value) {
          isCorrect = true;
        } else {
          isCorrect = false;
        }
        this.$emit('answered', isCorrect);
      }
    }
  }
</script>

<style scoped>
  #option {
    margin: 10px;
    width: 80px;
    height: 50px;
  }

  .panel {
    border: 1px solid gray;
  }
</style>
