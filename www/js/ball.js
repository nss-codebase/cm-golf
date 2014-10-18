/* exported Ball */

var Ball = (function(){
  'use strict';

  function Ball(){
    this.x = 100;
    this.y = 200;
  }

  Ball.prototype.draw = function(game){
    game.ctx.drawImage(game.assets.ball, this.x, this.y, 50, 50);
  };

  return Ball;
})();
