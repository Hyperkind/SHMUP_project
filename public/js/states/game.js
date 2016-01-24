// the game state
// handles sprite creation and game logic
(function() {

  var INITIAL_POSITIONS = [ { x : 100, y : 100 } ];

  // class constructor
  SHMUP.Game = function() {

    this.player;

  };

  SHMUP.Game.prototype.create = function() {

    // loads the player into the game
    this.player = new SHMUP.Player(this.game, 0);
    this.game.add.existing(this.player);

    // position player
    this.player.x = INITIAL_POSITIONS[0].x;
    this.player.y = INITIAL_POSITIONS[0].y;

  };

  SHMUP.Game.prototype.update = function() {

  };

  SHMUP.Game.prototype.shutdown = function() {

  };

})();
