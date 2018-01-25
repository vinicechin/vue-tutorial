new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertMe: function() {
      alert('Alert!');
    },

    storeValue: function() {
      this.value = event.target.value;
    }
  }
});
