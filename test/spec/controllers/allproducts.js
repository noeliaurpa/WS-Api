'use strict';

describe('Controller: AllproductsCtrl', function () {

  // load the controller's module
  beforeEach(module('wsApiApp'));

  var AllproductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllproductsCtrl = $controller('AllproductsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AllproductsCtrl.awesomeThings.length).toBe(3);
  });
});
