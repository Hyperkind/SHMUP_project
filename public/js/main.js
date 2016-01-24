// global var

window.SHMUP = {

  ASSETS : {},

  STAGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STAGE_ID : 'game', // matches the div in index.html to render the game

  STATES : {
    BOOT : 'Boot',
    GAME : 'Game'
  }

};

window.onload = function() {
  SHMUP.game = new Phaser.Game( SHMUP.STAGE.WIDTH, SHMUP.STAGE.HEIGHT, Phaser.AUTO, SHMUP.STAGE_ID );
  // SHMUP.game.state.add( SHMUP.STATES.BOOT, SHMUP.Boot );
  // SHMUP.game.state.add( SHMUP.STATES.GAME, SHMUP.Game );
  // SHMUP.game.state.start(SHMUP.STATES.BOOT);
};