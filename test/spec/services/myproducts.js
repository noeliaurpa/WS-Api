'use strict';

describe('Service: myProducts', function () {

  // load the service's module
  beforeEach(module('wsApiApp'));

  // instantiate service
  var myProducts;
  beforeEach(inject(function (_myProducts_) {
    myProducts = _myProducts_;
  }));

  it('should do something', function () {
    expect(!!myProducts).toBe(true);
  });

});
