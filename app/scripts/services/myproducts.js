'use strict';

/**
 * @ngdoc service
 * @name wsApiApp.myProducts
 * @description
 * # myProducts
 * Service in the wsApiApp.
 */
angular.module('wsApiApp')
  .service('myProducts', function ($resource) {
    return $resource('http://localhost:3000/v1/all');
  });
