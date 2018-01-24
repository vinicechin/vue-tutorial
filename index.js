new Vue({
  el: '#app',
  data: {
    isStarted: false,
    isFirstMove: true,
    log: [],
    playerHealth: 100,
    monsterHealth: 100
  },

  computed: {
    hasLogs: function() {
      return this.log.length > 0;
    },
    playerHealthStyle: function() {
      var backColor = 'green';
      if (this.playerHealth <= 50 & this.playerHealth > 20) {
        backColor = 'orange';
      } else if (this.playerHealth <= 20) {
        backColor = 'red';
      }
      return {
        width: this.playerHealth + '%',
        backgroundColor: backColor
      }
    },
    monsterHealthStyle: function() {
      var backColor = 'green';
      if (this.monsterHealth <= 50 & this.monsterHealth > 20) {
        backColor = 'orange';
      } else if (this.monsterHealth <= 20) {
        backColor = 'red';
      }
      return {
        width: this.monsterHealth + '%',
        backgroundColor: backColor
      }
    }
  },

  methods: {
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
      this.logAction(true, true, value);
      value = this.monsterHealth - value;
      if (value <= 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth = value;
      }
      if (this.isFirstMove) {
        this.isFirstMove = false;
      }
      this.verifyVictory(true);
    },

    specialAttack: function() {
      var value = this.playDice() + 2;
      this.logAction(true, true, value);
      value = this.monsterHealth - value;
      if (value <= 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth = value;
      }
      if (this.isFirstMove) {
        this.isFirstMove = false;
      }
      this.verifyVictory(true);
    },

    heal: function() {
      var value = this.playDice();
      this.logAction(true, false, value);
      if (value < 8) {
        value += 2;
      }
      value += this.playerHealth;
      if (value > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = value;
      }
      if (this.isFirstMove) {
        this.isFirstMove = false;
      }
    },

    monsterAttack: function() {
      if (this.isFirstMove) {
        return;
      }
      var vm = this;
      var value = this.playDice();
      this.logAction(false, true, value);
      value = this.playerHealth - value;
      setTimeout(function() {
        if (value <= 0 & vm.isStarted) {
          vm.playerHealth = 0;
        } else {
          vm.playerHealth = value;
        }
        vm.verifyVictory(false);
      }, 200);
    },

    playDice: function() {
      return Math.floor(Math.random() * 10) + 1;
    },

    resetFight: function() {
      this.isStarted = !this.isStarted;
      this.isFirstMove = true;
      this.log = [];
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    verifyVictory: function(isPlayer) {
      var vm = this;
      var hasWon = false;
      var message;
      if (isPlayer) {
        hasWon = this.monsterHealth <= 0 ? true : false;
        message = 'You won!';
      } else {
        hasWon = this.playerHealth <= 0 ? true : false;
        message = 'You lost!';
      }

      if (hasWon) {
        this.isFirstMove = true;
        setTimeout(function() {
          vm.resetFight();
          if (confirm(message + " New Game?")) {
            vm.isStarted = !vm.isStarted;
          }
        }, 200);
      }
    },

    logAction: function(isPlayer, isAttack, hitPoints) {
      var action;
      if (isPlayer) {
        if (isAttack) {
          action = {
            isPlayer: isPlayer,
            message: 'PLAYER hits MONSTER for ' + hitPoints
          };
        } else {
          action = {
            isPlayer: isPlayer,
            message: 'PLAYER heals himself for ' + hitPoints
          }
        }
      } else {
          action = {
            isPlayer: isPlayer,
            message: 'MONSTER hits PLAYER for ' + hitPoints
          }
      }
      this.log.unshift(action);
    }
  }
});
