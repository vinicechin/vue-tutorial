new Vue({
  el: '#exercise',
  data: {
    name: 'Vinicius',
    age: '29',
    link: 'https://orig00.deviantart.net/6d5f/f/2014/332/a/f/kingdom_hearts_ii_icon_by_andonovmarko-d87xp1v.png'
  },
  methods: {
    getRandom: function() {
      return Math.floor(Math.random() * 100);
    }
  }
})
