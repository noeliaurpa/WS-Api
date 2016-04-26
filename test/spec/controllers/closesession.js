'use strict';

describe('Controller: ClosesessionCtrl', function () {

  // load the controller's module
  beforeEach(module('wsApiApp'));

  var ClosesessionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClosesessionCtrl = $controller('ClosesessionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClosesessionCtrl.awesomeThings.length).toBe(3);
  });
});
