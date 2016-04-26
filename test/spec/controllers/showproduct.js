'use strict';

describe('Controller: ShowproductCtrl', function () {

  // load the controller's module
  beforeEach(module('wsApiApp'));

  var ShowproductCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowproductCtrl = $controller('ShowproductCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShowproductCtrl.awesomeThings.length).toBe(3);
  });
});
