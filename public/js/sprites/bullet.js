(function() {

  var BULLET_SPEED = 400;
  var FIRE_RATE = 100;

  SHMUP.Bullet = function(game, id) {

    this.game = game;
    this.id = id;

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, SHMUP.ASSETS.SPRITESHEET.BULLET.name);

    this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

    this.anchor.set(0.5);

    // enable physics (adds this.body)
    // this.game.physics.enable(this, Phaser.Physics.ARCADE);

    // checks if the bullet is within the world bounds. If not, kills it
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.exists = false;

    this.tracking = false;
    this.scaleSpeed = 0;

  };

  // extend sprite prototype
  SHMUP.Bullet.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: SHMUP.Bullet
    }
  });

  SHMUP.Bullet.prototype.fire = function(x, y, angle, speed, gx, gy) {

    gx = gx || 0;
    gy = gy || 0;

    this.reset(x, y);
    this.scale.set(1);

    this.game.physics.arcade.velocityFromAngle(angle, speed, this.body.velocity);

    this.angle = angle;

    this.anchor.setTo(0.5, 0.5);

    this.body.gravity.set(gx, gy);

  };

  SHMUP.Bullet.prototype.update = function() {

    if (this.tracking) {
      this.rotation = Math.atan2(this.body.velocity.y, this.body.velocity.x);
    }

    if (this.scaleSpeed > 0) {
      this.scale.x += this.scaleSpeed;
      this.scale.y += this.scaleSpeed;
    }

  };

  SHMUP.Bullet.prototype.shoot = function() {
    this.body.velocity.x = BULLET_SPEED;
  };

  SHMUP.Bullet.prototype.shoot_stop = function() {

  };

  var Weapon = {};

  Weapon.SingleBullet = function(game) {

    Phaser.Group.call(this, game, game.world, 'Single Bullet', false, true, Phaser.Physics.ARCADE);

    this.nextFire = 0;
    this.bulletSpeed = 600;
    this.fireRate = 100;

    for (var i = 0; i < 64; i++) {
      this.add(new Bullet(game, 'bullet5'), true);
    }

    return this;

  };

  Weapon.SingleBullet.prototype = Object.create(Phaser.Group.prototype);
  Weapon.SingleBullet.prototype.constructor = Weapon.SingleBullet;

  Weapon.SingleBullet.prototype.fire = function(source) {

    if (this.game.time.time < this.nextFire) {
      return;
    }

    var x = source.x + 10;
    var y = source.y + 10;

    this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);

    this.nextFire = this.game.time.time + this.fireRate;

  };

  // Weapon.FrontAndBack = function (game) {
  //     Phaser.Group.call(this, game, game.world, 'Front And Back', false, true, Phaser.Physics.ARCADE);
  //     this.nextFire = 0;
  //     this.bulletSpeed = 600;
  //     this.fireRate = 100;
  //     for (var i = 0; i < 64; i++)
  //     {
  //       this.add(new Bullet(game, 'bullet5'), true);
  //     }
  //     return this;
  //   };
  // Weapon.FrontAndBack.prototype = Object.create(Phaser.Group.prototype);
  // Weapon.FrontAndBack.prototype.constructor = Weapon.FrontAndBack;
  // Weapon.FrontAndBack.prototype.fire = function (source) {
  //   if (this.game.time.time < this.nextFire) {
  //     return;
  //   }
  //   var x = source.x + 10;
  //   var y = source.y + 10;
  //   this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
  //   this.getFirstExists(false).fire(x, y, 180, this.bulletSpeed, 0, 0);
  //   this.nextFire = this.game.time.time + this.fireRate;
  // };

})();