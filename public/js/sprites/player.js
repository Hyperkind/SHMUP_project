(function() {

  var ACCLERATION = 600;
  var DRAG = 400;
  var MAXSPEED = 400;

  SHMUP.Player = function(game, id, name) {
    this.game = game;
    this.id = id;
    this.name = name? name : 'Player ' + (id+1);

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, SHMUP.ASSETS.SPRITESHEET.PLAYER.name);

    // enable physics (adds this.body)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.maxVelocity.setTo(MAXSPEED, MAXSPEED);
    this.body.drag.setTo(DRAG, DRAG);

    // use stage bounding box
    this.body.collideWorldBounds = true;

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
    this.body.acceleration.x = -ACCLERATION;
  };

  SHMUP.Player.prototype.fly_right = function() {
    this.body.acceleration.x = ACCLERATION;
  };

  SHMUP.Player.prototype.fly_up = function() {
    this.body.acceleration.y = -ACCLERATION;
  };

  SHMUP.Player.prototype.fly_down = function() {
    this.body.acceleration.y = ACCLERATION;
  };

  // stop horizontal movement
  SHMUP.Player.prototype.stop_x = function() {
    this.body.acceleration.x = 0;
  };

  // stop vertical movement
  SHMUP.Player.prototype.stop_y = function() {
    this.body.acceleration.y = 0;
  };

})();