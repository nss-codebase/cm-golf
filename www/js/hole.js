/* exported Hole */

var Hole = (function(){
  'use strict';

  function Hole(){
    this.x = 100;
    this.y = 100;
  }

  Hole.prototype.draw = function(game){
    game.ctx.drawImage(game.assets.hole, this.x, this.y, 50, 50);
  };

  return Hole;
})();
