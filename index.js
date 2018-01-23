new Vue({
  el: '#app',
  data: {
    isStarted: false,
    log: [],
    playerHealth: 100,
    monsterHealth: 100
  },

  computed: {
    hasLogs: function() {
      return this.log.length > 0;
    },
    playerHealthStyle: function() {
      return {
        width: this.playerHealth + '%'
      }
    },
    monsterHealthStyle: function() {
      return {
        width: this.monsterHealth + '%'
      }
    }
  },

  methods: {
    resetFight: function() {
      this.isStarted = !this.isStarted;
      this.log = [];
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    playTurn: function() {
      switch (event.target.id) {
        case 'attack': 
          this.attack(); 
          this.monsterAttack();
          break;
        case 'special-attack': 
          this.specialAttack(); 
          this.monsterAttack();
          break;
        case 'heal': 
          this.heal(); 
          this.monsterAttack();
          break;
        case 'give-up': this.resetFight(); break;
      }
    },

    attack: function() {
      var value = this.playDice();
      value = this.monsterHealth - value;
      if (value <= 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth = value;        
      }
    },

    specialAttack: function() {
      var value = this.playDice() + 2;
      value = this.monsterHealth - value;
      if (value <= 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth = value;        
      }
    },

    heal: function() {
      var value = this.playDice();
      if (value < 8) {
        value += 2;
      }
      value += this.playerHealth;
      if (value > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = value;
      }
    },

    monsterAttack: function() {
      var vm = this;
      var value = this.playDice();
      value = this.playerHealth - value;
      setTimeout(function() {
        if (value <= 0) {
          vm.playerHealth = 0;
        } else {
          vm.playerHealth = value;        
        }
      }, 200);   
    },

    playDice: function() {
      return Math.floor(Math.random() * 10) + 1;
    }
  }
});
