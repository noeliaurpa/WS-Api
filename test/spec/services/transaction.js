'use strict';

describe('Service: transaction', function () {

  // load the service's module
  beforeEach(module('wsApiApp'));

  // instantiate service
  var transaction;
  beforeEach(inject(function (_transaction_) {
    transaction = _transaction_;
  }));

  it('should do something', function () {
    expect(!!transaction).toBe(true);
  });

});
