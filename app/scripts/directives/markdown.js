'use strict';

angular.module('directives').
directive('markdown', ['$window', 'Formatter', function ($window, Formatter) {

  $window.marked.setOptions({
    renderer: new $window.marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

  function linker(scope, element) {
    var htmlText = $window.marked(Formatter.convert(element.text()));

    element.html(htmlText);
  }

  return {
    restrict: 'A',
    link: linker
  };
}]);
