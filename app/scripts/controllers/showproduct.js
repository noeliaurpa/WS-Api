'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:ShowproductCtrl
 * @description
 * # ShowproductCtrl
 * Controller of the wsApiApp
 */
 angular.module('wsApiApp')
 .controller('ShowproductCtrl', function ($scope, $http, $route, $localStorage, $rootScope, $location, $routeParams) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$http.get('http://localhost:3000/v1/products/'+ $routeParams.id, {
     headers: {
 				"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
 			}
   }).success(function(response){
     $scope.product = response;
     console.log($scope.product);
   });


   $scope.edit = function(id) {
   	//debugger;
     var parameter = JSON.stringify({name:$scope.product.name, description:$scope.product.description});
     var url = 'http://localhost:3000/v1/products/' +id;
     $http.put(url, parameter, {
      headers: {
 				"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
 			}
     }).success(function(response){
       $location.path('/myProducts');
       $route.reload();
       console.log("Producto Modificado");
     });

   };
 });
