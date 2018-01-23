new Vue({
  el: '#app',
  data: {
    attach: false
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
