new Vue({
  el: '#app',
  data: {
    attach: false,
    color: 'green'
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attach,
        blue: !this.attach
      }
    }
  }
});
