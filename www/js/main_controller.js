(function(){
  'use strict';

  angular.module('cm-golf')
  .controller('MainCtrl', ['$scope', function($scope){
    var game = new Game();

    $scope.start = function(){
      game.start();
    };

    $scope.stop = function(){
      game.stop();
    };
  }]);

})();
