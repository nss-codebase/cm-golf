/* exported Game */
/* global Asset, Ball, Hole */

var Game = (function(){
  'use strict';

  function Game(){
    var bodyHeight   = window.innerHeight,
        headerHeight = document.getElementsByTagName('ion-header-bar')[0].clientHeight;

    this.canvas        = document.getElementById('canvas');
    this.ctx           = this.canvas.getContext('2d');
    this.canvas.height = bodyHeight - headerHeight;
    this.canvas.width  = window.innerWidth;
    this.assets        = Asset.load();
    this.isOver        = true;
    this.inHole        = false;
    this.isOut         = false;

    this.listen();
  }

  Game.prototype.listen = function(){
    window.addEventListener('deviceorientation', function(data){
      this.ball.update(data);
    }.bind(this));
  };

  Game.prototype.loop = function(timestamp){
    this.inHole = this.hole.isBallInside(this.ball);
    this.isOut = this.ball.didVanish(this);

    this.clear();
    this.hole.draw(this);
    this.ball.draw(this);

    if(this.inHole || this.isOut){
      navigator.vibrate(3000);
    }

    this.isOver = this.inHole || this.isOut;

    if(!this.isOver){
      window.requestAnimationFrame(this.loop.bind(this));
    }
  };

  Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.start = function(){
    this.isOver = false;
    this.inHole = false;
    this.isOut  = false;
    this.ball = new Ball(this);
    this.hole = new Hole(this);
    this.loop();
  };

  Game.prototype.stop = function(){
    this.isOver = true;
  };

  return Game;
})();
