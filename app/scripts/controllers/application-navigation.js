angular.module('controllers').
controller('ApplicationNavigationController', ['$scope', '$location', function($scope, $location) {
  'use strict';

  $scope.isCollapsed = true;

  $scope.$on('$routeChangeStart', function() {
    $scope.path = $location.path();
  });
}]);
