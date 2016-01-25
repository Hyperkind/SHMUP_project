(function() {

  var ANIMATIONS = {
    FLYING : {
      name : 'flying',
      frames : [0],
      fps : 5
    }
  };

  var FLY_SPEED = 400;

  SHMUP.Player = function(game, id, name) {
    this.game = game;
    this.id = id;
    this.name = name? name : 'Player ' + (id+1);

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, SHMUP.ASSETS.SPRITESHEET.PLAYER.name);

    // enable physics (adds this.body)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    // use stage bounding box
    this.body.collideWorldBounds = true;

    this.animations.add(ANIMATIONS.FLYING.name, ANIMATIONS.FLYING.frames);

    this.animations.play(ANIMATIONS.FLYING.name, ANIMATIONS.FLYING.fps, true);
  };

  // extend sprite prototype
  SHMUP.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: SHMUP.Player
    }
  });

  SHMUP.Player.prototype.update = function() {

  };

  SHMUP.Player.prototype.shoot = function() {

  };

  SHMUP.Player.prototype.shoot_stop = function() {

  };

  SHMUP.Player.prototype.fly_left = function() {
    this.body.velocity.x = -FLY_SPEED;
  };

  SHMUP.Player.prototype.fly_right = function() {
    this.body.velocity.x = FLY_SPEED;
  };

  SHMUP.Player.prototype.fly_up = function() {
    this.body.velocity.y = -FLY_SPEED;
  };

  SHMUP.Player.prototype.fly_down = function() {
    this.body.velocity.y = FLY_SPEED;
  };

  // stop horizontal movement
  SHMUP.Player.prototype.stop_x = function() {
    this.body.velocity.x = 0;
  };

  // stop vertical movement
  SHMUP.Player.prototype.stop_y = function() {
    this.body.velocity.y = 0;
  };

})();