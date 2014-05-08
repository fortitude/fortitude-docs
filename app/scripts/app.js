'use strict';

angular
  .module('docsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngRoute',
    'controllers',
    'directives',
    'services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/generator', {
        templateUrl: 'views/generator.html',
        controller: 'ExtensionGeneratorController'
      })
      .when('/documentation', {
        templateUrl: 'views/documentation.html',
        controller: 'ApplicationController'
      })
      .when('/architecture', {
        templateUrl: 'views/architecture.html',
        controller: 'ApplicationController'
      })
      .otherwise({
        redirectTo: '/generator'
      });
  });
