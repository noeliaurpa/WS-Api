'use strict';

angular.module('wsApiApp')
.controller('AllProductsCtrl', function ($scope, $http, $route, Product, $localStorage, $rootScope, $location) {
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

   $scope.deleteProduct = function(id) {
      //Product.delete({'id': id});
      debugger;
      //var parameter = id;
    
    //console.log(parameter);
    //console.log("'http://localhost:3000/v1/products/" + id + "'");
    var url = "http://localhost:3000/v1/products/" + id ;
    $http.delete(url , {
      headers: {
        "Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
      }
    }).success(function(response){
      $location.path('/dashboard');
      $route.reload();
      console.log("Producto Eliminado");
    });

    };

    $scope.editProduct = function(id) {
    var parameter = JSON.stringify({name:$scope.product.name, description:$scope.product.description,
      state: "t"});
    
    console.log(parameter);
    var url = "http://localhost:3000/v1/products/" + id ;
    $http.put(url , parameter, {
      headers: {
        "Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
      }
    }).success(function(response){
      $location.path('/dashboard');
      $route.reload();
      console.log("Producto Editado");
    });

    };
});
