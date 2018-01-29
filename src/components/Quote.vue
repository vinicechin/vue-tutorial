<template>
    <div>
        <div class="quote-element" @click="deleteQuote">
            <p>{{ quote.text }}</p>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: ['quote'],

        methods: {
            deleteQuote() {
                eventBus.deleteQuote(this.quote.index);
            }
        }
    }
</script>

<style scoped>
  .quote-element {
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 5px;
    border: 1px solid #BBB;
    border-radius: 4px;
    font-family: Arizonia, cursive;
    font-size: 28px;
    color: #777;
    word-wrap: break-word;
  }

  .quote-element:hover {
    background-color: #ffe2e2;
  }
</style>
