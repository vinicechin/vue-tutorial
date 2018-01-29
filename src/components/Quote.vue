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
                eventBus.deleteQuote(this.quote);
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
    font-family: Arizonia;
    font-size: 28px;
    color: #777;
    word-wrap: break-word;
  }
</style>
