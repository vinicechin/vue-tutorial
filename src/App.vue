<template>
    <div class="container">
      <app-header>
        <h3>Quotes Added</h3>
        <div class="quotesBar">
          <div class="quotesIncrementBar" :style="quotesBarStyle">
            {{ quotesList.length }}/10
          </div>
        </div>
      </app-header>

      <app-quote-writer>
        <div>
          <p>Quote</p>
          <textarea v-model="quoteText">
          </textarea>
        </div>
        <div class="btnContainer">
          <button class="btn btn-primary" @click="createQuote">Add Quote</button>          
        </div>
      </app-quote-writer>

      <app-quotes-display>
        <app-quote class="quote-item" v-for="(text, index) in quotesList" :key="index" :quote="{ index:index, text:text }"></app-quote>
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
  import Quote from './components/Quote.vue';
  import { eventBus } from './main';

  export default {
    data: function() {
      return {
        maxQuotes: 10,
        quoteText: '',
        quotesList: []
      }
    },

    computed: {
      quotesBarStyle() {
        return {
          width: (this.quotesList.length * 10) + '%'
        }
      }
    },

    methods: {
      createQuote() {
        if (this.quoteText.trim()) {
          if (this.quotesList.length < this.maxQuotes) {
              this.quotesList.push(this.quoteText);
              this.quoteText = '';
          } else {
            console.log("cant add anymore");
            setTimeout(function() {
              alert("Max number of quotes is 10. Can't add anymore!")
            }, 100);
          }
        }
      }
    },

    created() {
      eventBus.$on('quoteDeleted', (quote => {
        this.quotesList.splice(quote.index, 1);
      }));
    },

    components: {
      'app-header': Header,
      'app-quote-writer': QuoteWriter,
      'app-quotes-display': QuotesDisplay,
      'app-footer': Footer,
      'app-quote': Quote
    }
  }
</script>

<style>
</style>
