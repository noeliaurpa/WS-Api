'use strict';

describe('Service: newProduct', function () {

  // load the service's module
  beforeEach(module('wsApiApp'));

  // instantiate service
  var newProduct;
  beforeEach(inject(function (_newProduct_) {
    newProduct = _newProduct_;
  }));

  it('should do something', function () {
    expect(!!newProduct).toBe(true);
  });

});
