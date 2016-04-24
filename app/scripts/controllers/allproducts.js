'use strict';

angular.module('wsApiApp')
.controller('AllProductsCtrl', function ($scope, $http, $route, Product, $localStorage, $rootScope) {
    this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
    ];
    $http.get('http://localhost:3000/v1/products/', {
       headers: {
        "Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
       }
   }).success(function(response){
       $scope.products = response;
   });
});