new Vue({
  el: '#app',
  data: {
    title: ""
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  } 
})
