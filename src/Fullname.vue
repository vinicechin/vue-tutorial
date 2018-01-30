<template>
  <div>
    <div class="form-group">
        <label for="fisrtname">First Name</label>
        <input type="text" id="firstname" class="form-control" :value="firstName" @input="setFirstname">
    </div>
    <div class="form-group">
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" class="form-control" :value="lastName" @input="setLastname">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    computed: {
      firstName() {
        return this.value.split(' ')[0];
      },
      lastName() {
        return this.value.split(' ')[1];
      }
    },
    methods: {
      setFirstname(event) {
        let name = '';
        name = event.target.value + ' ' + this.lastName;
        this.emitChange(name);
      },

      setLastname(event) {
        let name = '';
        name = this.firstName + ' ' + event.target.value;
        this.emitChange(name);
      },

      emitChange(name) {
        this.$emit('input', name);
      }
    }
  }
</script>
