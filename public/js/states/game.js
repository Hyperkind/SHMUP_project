// the game state
// handles sprite creation and game logic
(function() {

  // var to place player at start of game
  var INITIAL_POSITIONS = { x : 100, y : 300 };

  // class constructor
  SHMUP.Game = function() {

    this.player;
    this.bullet;

  };

  SHMUP.Game.prototype.create = function() {

    //loads the background
    this.game.add.tileSprite(0, 0, SHMUP.ASSETS.IMAGE.BG.width, SHMUP.ASSETS.IMAGE.BG.height, SHMUP.ASSETS.IMAGE.BG.name);

    // loads the player into the game
    this.player = new SHMUP.Player(this.game, 0);
    this.game.add.existing(this.player);

    // initial position of the player
    this.player.x = INITIAL_POSITIONS.x;
    this.player.y = INITIAL_POSITIONS.y;

    // initialize input handler
    this.input = new SHMUP.GameInput(this);

  };

  SHMUP.Game.prototype.update = function() {

  };

  SHMUP.Game.prototype.shutdown = function() {

  };

  // Input action to continue
  SHMUP.Game.prototype.continue = function() {

  };

})();
