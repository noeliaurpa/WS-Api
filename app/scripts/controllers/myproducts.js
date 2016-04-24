'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:MyproductsCtrl
 * @description
 * # MyproductsCtrl
 * Controller of the wsApiApp
 */
 
 angular.module('wsApiApp')
 .controller('MyproductsCtrl', function ($scope, $http, $route, myProducts, $localStorage, $rootScope) {
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
 });
