'use strict';

angular.module('services').factory('Block', ['$q', '$http', function($q, $http) {

  function fetch(url) {
    var deferred = new $q.defer();
    $http
      .get(url)
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(data) {
        deferred.reject(data);
      });

    return deferred.promise;
  }

  var blocks = [
    {
      name: 'badge',
      htmlTemplateUrl: '/views/generator/badge.md',
      cssTemplateUrl: '/views/generator/badge.css'
    },
    {
      name:'box',
      htmlTemplateUrl: 'views/generator/box.md',
      cssTemplateUrl: 'views/generator/box.css'
    },
    {
      name: 'button',
      htmlTemplateUrl: 'views/generator/button.md',
      cssTemplateUrl: 'views/generator/button.css'
    },
    {
      name: 'field',
      htmlTemplateUrl: 'views/generator/field.md',
      cssTemplateUrl: 'views/generator/field.css'
    },
    {
      name: 'flashbar',
      htmlTemplateUrl: 'views/generator/flashbar.md',
      cssTemplateUrl: 'views/generator/flashbar.css'
    },
    {
      name: 'navigationbar',
      htmlTemplateUrl: 'views/generator/navigationbar.md',
      cssTemplateUrl: 'views/generator/navigationbar.css'
    },
    {
      name: 'tabs',
      htmlTemplateUrl: 'views/generator/tabs.md',
      cssTemplateUrl: 'views/generator/tabs.css'
    }
  ];

  return {
    query: function() { return blocks; },
    get: function(index) { return blocks[index]; },
    html: function(block) { return fetch(block.htmlTemplateUrl); },
    css: function(block) { return fetch(block.cssTemplateUrl); }
  };

}]);
