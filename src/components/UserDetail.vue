<template>
    <div class="component">
        <h3>You will see the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        // required: true
        default: 'Vinicius'
      },
      resetFn: Function,
      userAge: Number
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
