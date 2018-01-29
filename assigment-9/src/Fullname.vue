<template>
  <div>
    <div class="form-group">
        <label for="fisrtname">First Name</label>
        <input type="text" id="firstname" class="form-control" @input="setFirstname">
    </div>
    <div class="form-group">
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" class="form-control" @input="setLastname">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      setFirstname(event) {
        this.value.firstname = event.target.value;
        this.emitChange();
      },

      setLastname(event) {
        this.value.lastname = event.target.value;
        this.emitChange();
      },

      emitChange() {
        this.$emit('input', this.value);
      }
    }
  }
</script>
