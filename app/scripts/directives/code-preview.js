'use strict';

angular.module('directives').
directive('codePreview', ['Formatter', '$window', function (Formatter, $window) {
  function linker(scope, element, attrs) {
    var $code = $window.$('<code />'),
    $pre = $window.$('<pre />');

    if (attrs.textRender) {
      $code.addClass(attrs.textRender);
    }

    element.html($pre.append($code.text(Formatter.convert(element.html()))));
  }

  return {
    restrict: 'A',
    link: linker
  };
}]);
