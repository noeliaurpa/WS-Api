'use strict';

/**
 * @ngdoc service
 * @name wsApiApp.transaction
 * @description
 * # transaction
 * Service in the wsApiApp.
 */
angular.module('wsApiApp')
  .service('transaction', function ($resource) {
    return $resource('http://localhost:3000/v1/transactions');
  });