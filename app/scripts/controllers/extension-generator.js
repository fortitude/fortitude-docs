angular.module('controllers').
controller('ExtensionGeneratorController',
['$scope', '$window', '$http', '$compile', 'Block',
function($scope, $window, $http, $compile, Block) {
  'use strict';

  $scope.usePrefixes = true;
  $scope.blocks = Block.query();
  $scope.block = Block.get(0);

  $scope.$watch('block', function(block) {
    Block.html(block).then(function(data) {
      $scope.md = data;
    });

    Block.css(block).then(function(data) {
      $scope.css = data;
    });
  });
}]);
