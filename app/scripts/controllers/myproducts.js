'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:MyproductsCtrl
 * @description
 * # MyproductsCtrl
 * Controller of the wsApiApp
 */
 angular.module('wsApiApp')
 .controller('MyproductsCtrl', function ($scope, $http, $route, myProducts, $localStorage, $rootScope, $location) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$http.get('http://localhost:3000/v1/all', {
 		headers: {
 			"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
 		}
 	}).success(function(response){
 		$scope.products = response;
 	});


$scope.deleteProduct = function(id) {
      //Product.delete({'id': id});
      //debugger;
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

  $scope.getProductId = function(id) {
    //debugger;
    $location.path('editProduct/'+id);
    $route.reload();
  };
 });
