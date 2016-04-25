'use strict';

/**
 * @ngdoc service
 * @name wsApiApp.newProduct
 * @description
 * # newProduct
 * Service in the wsApiApp.
 */
angular.module('wsApiApp')
  .service('newProduct', function ($resource) {
    return $resource('http://api.proyecto.com:3000/v1/products');
  });
