<template>
    <div class="component">
        <h3>You will see the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        // required: true
        default: 'Vinicius'
      }
    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      },
      resetName() {
        this.name = 'Vinicius';
        this.$emit('nameReset', this.name);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
