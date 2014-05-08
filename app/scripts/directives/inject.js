'use strict';

angular.module('directives').directive('inject', [function() {

  function linker(scope, element) {
    scope.$watch('inject', function(value) {
      element.html(value);
    });
  }

  return {
    scope: {
      inject: '='
    },
    link: linker
  };

}]);
