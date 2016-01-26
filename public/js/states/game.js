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
    this.background = this.add.tileSprite(0, 0, SHMUP.ASSETS.IMAGE.BG.width, SHMUP.ASSETS.IMAGE.BG.height, SHMUP.ASSETS.IMAGE.BG.name);
    // autoScrolls the background
    this.background.autoScroll(-40, 0);

    // loads the player into the game
    this.player = new SHMUP.Player(this.game, 0);
    this.game.add.existing(this.player);
    this.player.anchor.setTo(0.5, 0.5);

    // initial position of the player
    this.player.x = INITIAL_POSITIONS.x;
    this.player.y = INITIAL_POSITIONS.y;

    // this.bullet = new SHMUP.Bullet(this.game, 0);
    // this.game.add.existing(this.bullet);

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
