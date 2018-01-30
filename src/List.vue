<template>
  <div>
    <h1>Filters & Mixins</h1>
    <hr>
    <input v-model="filterText" type="text">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
    import { FruitMixin } from './FruitMixin';

    export default {
      mixins: [FruitMixin],
      created() {
        console.log('List Created!')
      }
    }
</script>

<style>
</style>
