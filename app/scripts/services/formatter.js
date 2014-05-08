angular.module('services').factory('Formatter', ['$window', function($window) {
  'use strict';

  function convert(string) {
    var html = '',
        initialWhitespacePosition = 0;

    html = $window._.chain(string.split('\n')).filter(function(item) {
      if ($window.$.trim(item) === '') {
        return false;
      }

      initialWhitespacePosition = item.search(/\w/) - 2;

      if (initialWhitespacePosition < 0) {
        initialWhitespacePosition = 0;
      }


      return true;
    }).map(function(item) {
      return item.slice(initialWhitespacePosition);
    }).value();


    return html.join('\n');
  }

  return {
    convert: convert
  };

}]);
