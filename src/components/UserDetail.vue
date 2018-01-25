<template>
    <div class="component">
        <h3>You will see the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
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
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
