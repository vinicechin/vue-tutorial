new Vue({
  el: '#exercise',
  data: {
    effects: {
      highlight: false,
      shrink: true
    },
    redText: 'red-text',
    inputClass: 'blue-box',
    inputBool: false,
    myStyle: {
      backgroundColor: 'red',
      width: '50px',
      height: '50px'
    },
    myProgressBar: {
      backgroundColor: 'red',
      height: '10px',
      width: '0px'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effects.highlight = !vm.effects.highlight;
        vm.effects.shrink = !vm.effects.shrink;
      }, 1000);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        if (width < 100) {
          width += 1;
          vm.myProgressBar.width = width + 'px';
        } else {
          width = 0;
          vm.myProgressBar.width = 0 + 'px';
        }
      }, 10);
    }
  }
});
