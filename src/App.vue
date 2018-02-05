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
        <!-- <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight" mode="out-in">
            <keep-alive>
                <component :is="currentComponent" :isCorrect="isCorrect" @answered="showAnswer($event)" @showNewQuestion="showQuestion"></component>
            </keep-alive>
        </transition> -->
        <transition name="flip" mode="out-in">
            <keep-alive>
                <component :is="currentComponent" :isCorrect="isCorrect" @answered="showAnswer($event)" @showNewQuestion="showQuestion"></component>
            </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import AppQuestion from './components/AppQuestion.vue';
  import AnswerMessage from './components/AnswerMessage.vue';

  export default {
    data() {
      return {
        currentComponent: 'app-question',
        isCorrect: true
      }
    },

    components: {
      'app-question': AppQuestion,
      'answer-message': AnswerMessage
    },

    methods: {
      showAnswer(isCorrect) {
        if (isCorrect) {
            this.isCorrect = true;
        } else {
            this.isCorrect = false;
        }
        this.currentComponent = 'answer-message';
      },

      showQuestion() {
        this.currentComponent = 'app-question';
      }
    }
  }
</script>

<style>
  .flip-enter {
    /*transform: rotateY(0deg);*/
  }

  .flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
  }

  .flip-leave {
    /*transform: rotateY(0deg);*/
  }

  .flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
</style>
