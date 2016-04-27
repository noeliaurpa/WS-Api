'use strict';

angular.module('wsApiApp')
.controller('AllProductsCtrl', function ($scope, $http, $route, Product, $localStorage, $rootScope, $location) {
	this.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];
	$http.get('http://api.proyecto.com:3000/v1/other_Product_id', {
		headers: {
			"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
		}
	}).success(function(response){
		$scope.products = response;
	});

	$scope.newTrans = function(id){
		$location.path('newTransaction/'+id);
		$route.reload();
	}
});
