'use strict';

describe('Service: getProductId', function () {

  // load the service's module
  beforeEach(module('wsApiApp'));

  // instantiate service
  var getProductId;
  beforeEach(inject(function (_getProductId_) {
    getProductId = _getProductId_;
  }));

  it('should do something', function () {
    expect(!!getProductId).toBe(true);
  });

});
