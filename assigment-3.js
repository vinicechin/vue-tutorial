new Vue({
    el: '#exercise',
    data: {
      value: 0
    },
    computed: {
      result: function() {
        return this.value < 15 ? 'Not there yet' : 'Done';
      }
    },
    watch: {
      result: function() {
        if (this.value > 0) {
          var parent = this;
          setTimeout(function() {
            parent.value = 0;
          }, 5000);
        }
      }
    }
});
