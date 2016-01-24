// responsible for preloading assets
// and switch to the game state

// class constructor
SHMUP.Boot = function() {

};

SHMUP.Boot.prototype.preload = function() {
  // autoload assets by type
  Object.keys(SHMUP.ASSETS).forEach(function(type) {
    for(var asset in SHMUP.ASSETS[type]) {
      SHMUP.game.load[ type.toLowerCase() ](
        SHMUP.ASSETS[type][ asset ].name,
        SHMUP.ASSETS[type][ asset ].path,
        SHMUP.ASSETS[type][ asset ].width,
        SHMUP.ASSETS[type][ asset ].height
        // SHMUP.ASSETS[type][ asset ].frames
      );
    }
  });

};

SHMUP.Boot.prototype.create = function() {

  // switch to game state
  this.state.start(SHMUP.STATES.GAME);

};