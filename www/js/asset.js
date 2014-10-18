/* exported Asset */

var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load = function(){
    var asset = {};

    asset.ball = new Image();
    asset.ball.src = 'img/ball.png';
    asset.hole = new Image();
    asset.hole.src = 'img/hole.png';

    return asset;
  };

  return Asset;
})();
