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
  const MIN_OPERATION_VALUE = 0;
  const MAX_OPERATION_VALUE = 99;
  const SUM_OP = 1;
  const SUB_OP = 2;
  export default {
    data() {
      return {
        question: '<> + <>',
        answers: [1, 2, 3, 4, 5, 6],
        correctAnswer: 2,
        lastAnswer: false
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
        this.lastAnswer = isCorrect;
        this.$emit('answered', isCorrect);
      },

      generateQuestion() {
        let op1 = this.generateRandomNumber(MIN_OPERATION_VALUE, MAX_OPERATION_VALUE);
        let op2 = this.generateRandomNumber(MIN_OPERATION_VALUE, MAX_OPERATION_VALUE);
        let op;
        if (this.generateOperation() == SUM_OP) {
          op = ' + ';
          this.correctAnswer = op1 + op2;
        } else {
          op = ' - ';
          this.correctAnswer = op1 - op2;
        }

        this.generateAnswerOptions(op1, op2);
        this.question = op1 + op + op2;
      },

      generateAnswerOptions() {
        let exceptions = [this.correctAnswer];
        let newArray = [];
        for (let answer in this.answers) {
          answer = this.generateRandomNumber(this.correctAnswer - 15, this.correctAnswer + 15, exceptions);
          exceptions.push(answer);
          newArray.push(answer);
        }

        let pos = this.generateRandomNumber(1, 6);
        newArray[pos] = this.correctAnswer;
        this.answers = newArray;
      },

      generateOperation() {
        return this.generateRandomNumber(SUM_OP, SUB_OP);
      },

      generateRandomNumber(min, max, exceptions) {
        let number = Math.floor(Math.random() * (max - min) + min);
        if (exceptions != undefined && exceptions.includes(number)) {
          number = this.generateRandomNumber(min, max, exceptions);
        }
        return number;
      }
    },

    created() {
      this.generateQuestion();
    },

    activated() {
      if (this.lastAnswer) {
        this.generateQuestion();
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
