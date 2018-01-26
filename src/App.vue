<template>
    <div class="container">
      <app-header>
        <h3>Quotes Added</h3>
        <div class="quotesBar">
          <div class="quotesIncrementBar" :style="quotesBarStyle">
            {{ quotesCont }}/10
          </div>
        </div>
      </app-header>

      <app-quote-writer>
        <div>
          <p>Quote</p>
          <textarea>
          </textarea>
        </div>
        <button>Add Quote</button>
      </app-quote-writer>

      <app-quotes-display>
      </app-quotes-display>

      <app-footer>
      </app-footer>
    </div>
</template>

<script>
  import Header from './components/Header.vue';
  import QuoteWriter from './components/QuoteWriter.vue';
  import QuotesDisplay from './components/QuotesDisplay.vue';
  import Footer from './components/Footer.vue';

  export default {
    data: function() {
      return {
        quotesCont: 0
      }
    },
    computed: {
      quotesBarStyle() {
        return {
          width: (this.quotesCont * 10) + '%'
        }
      }
    },
    components: {
      'app-header': Header,
      'app-quote-writer': QuoteWriter,
      'app-quotes-display': QuotesDisplay,
      'app-footer': Footer
    }
  }
</script>

<style>
</style>
