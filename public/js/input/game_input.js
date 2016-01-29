(function() {

  var BIND = {
    // player controls
    PLAYER : {
      UP : Phaser.KeyCode.W,
      DOWN : Phaser.KeyCode.S,
      LEFT : Phaser.KeyCode.A,
      RIGHT : Phaser.KeyCode.D,
      SHOOT : Phaser.KeyCode.SPACEBAR
    },
    STATE : {
      CONTINUE : Phaser.KeyCode.ENTER
    }
  };

  SHMUP.GameInput = function(state) {

    this.state = state;

    this.player_keys = this.state.game.input.keyboard.addKeys(BIND.PLAYER);
    this.state_keys = this.state.game.input.keyboard.addKeys(BIND.STATE);

    // key up and down listeners
    this.player_keys.SHOOT.onDown.add( this.state.bullet.shoot.bind(this.state.player) );
    this.player_keys.SHOOT.onUp.add( this.state.bullet.shoot_stop.bind(this.state.player) );
    this.player_keys.LEFT.onDown.add( this.state.player.fly_left.bind(this.state.player) );
    this.player_keys.LEFT.onUp.add( this.state.player.stop_x.bind(this.state.player) );
    this.player_keys.RIGHT.onDown.add( this.state.player.fly_right.bind(this.state.player) );
    this.player_keys.RIGHT.onUp.add( this.state.player.stop_x.bind(this.state.player) );
    this.player_keys.UP.onDown.add( this.state.player.fly_up.bind(this.state.player) );
    this.player_keys.UP.onUp.add( this.state.player.stop_y.bind(this.state.player) );
    this.player_keys.DOWN.onDown.add( this.state.player.fly_down.bind(this.state.player) );
    this.player_keys.DOWN.onUp.add( this.state.player.stop_y.bind(this.state.player) );

    this.state_keys.CONTINUE.onUp.add( this.state.continue.bind(this.state) );
  };

})();