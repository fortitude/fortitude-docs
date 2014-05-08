'use strict';

describe('Controller: ApplicationController', function () {

  // load the controller's module
  beforeEach(module('docsApp'));

  var ApplicationController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicationController = $controller('ApplicationController', {
      $scope: scope
    });
  }));

  it('should attach a version number to the scope', function () {
    expect(scope.version).toBe('0.1.1');
  });
});
