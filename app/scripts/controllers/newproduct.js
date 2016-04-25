'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:NewproductCtrl
 * @description
 * # NewproductCtrl
 * Controller of the wsApiApp
 */
 angular.module('wsApiApp')
 .controller('NewproductCtrl', function ($scope, $http, $route, $localStorage, $rootScope, $location) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$scope.nuevo = function() {
 		var parameter = JSON.stringify({name:$scope.product.name, description:$scope.product.description,
 			state: "t"});
 		
 		console.log(parameter);
 		$http.post('http://localhost:3000/v1/products', parameter, {
 			headers: {
 				"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
 			}
 		}).success(function(response){
 			$location.path('/dashboard');
 			$route.reload();
 			console.log("Producto Creado");
 		});

 	};
 });