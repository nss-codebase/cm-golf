(function(){
  'use strict';

  angular.module('cm-golf')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    var game  = null,
        timer = null;

    resetClock();

    document.addEventListener('deviceready', function(){
      game = new Game();
    });

    window.addEventListener('gameover', function(){
      cancelTimer();
    });

    function startClock(){
      resetClock();
      cancelTimer();
      timer = $interval(function(){
        $scope.clock++;
      }, 1000);
    }

    function resetClock(){
      $scope.clock = 0;
    }

    function cancelTimer(){
      $interval.cancel(timer);
    }

    $scope.start = function(){
      game.start();
      startClock();
    };
  }]);
})();
