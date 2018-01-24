var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },

  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },

    updateTitle: function(title) {
      this.title = title;
    }
  },

  conputed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },

  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }

});

setTimeout(function() {
  vm1.title = 'Changed by Timer!';
} ,3000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second Instance'
  },
  methods : {
    onChange: function() {
      vm1.title = 'Changed!';
    }
  }
});

