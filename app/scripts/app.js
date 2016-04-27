'use strict';

/**
 * @ngdoc overview
 * @name wsApiApp
 * @description
 * # wsApiApp
 *
 * Main module of the application.
 */
 angular
 .module('wsApiApp', [
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngStorage'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'CreateUserCtrl',
    controllerAs: 'news'
  })
  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .when('/dashboard', {
    templateUrl: 'views/dashboard.html',
    controller: 'AllProductsCtrl',
    controllerAs: 'allProducts'
  })
  .when('/myProducts', {
    templateUrl: 'views/myproducts.html',
    controller: 'MyproductsCtrl',
    controllerAs: 'myProducts'
  })
  .when('/transaction', {
    templateUrl: 'views/transaction.html',
    controller: 'TransactionCtrl',
    controllerAs: 'transaction'
  })
  .when('/newProduct', {
    templateUrl: 'views/newproduct.html',
    controller: 'NewproductCtrl',
    controllerAs: 'newProduct'
  })
  .when('/editProduct/:id', {
    templateUrl: 'views/editproduct.html',
    controller: 'EditproductCtrl',
    controllerAs: 'editProduct'
  })
  .when('/showProduct/:id', {
    templateUrl: 'views/showproduct.html',
    controller: 'ShowproductCtrl',
    controllerAs: 'showProduct'
  })
  .when('/newTransaction/:id', {
    templateUrl: 'views/newtransaction.html',
    controller: 'NewtransactionCtrl',
    controllerAs: 'newTransaction'
  })
  .when('/closeSession', {
    templateUrl: 'views/closesession.html',
    controller: 'ClosesessionCtrl',
    controllerAs: 'closeSession'
  })
  .otherwise({
    redirectTo: '/'
  });
});

 angular
 .module('wsApiApp')
 .factory('httpRequestInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.localStorage.token) {
        config.headers.Authorization = 'Bearer ' + JSON.parse(sessionStorage.getItem("ngStorage-token"));
        console.log('Bearer ' + JSON.parse(sessionStorage.getItem("ngStorage-token")));
        console.log("hola");
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
                // handle the case where the user is not authenticated
              }
              return response || $q.when(response);
            }
          };
        });
