'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:EditproductCtrl
 * @description
 * # EditproductCtrl
 * Controller of the wsApiApp
 */
 angular.module('wsApiApp')
 .controller('EditproductCtrl', function ($scope, $http, $route, $localStorage, $rootScope, $location, $routeParams) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	var id = $routeParams.id;
 	var url = 'http://localhost:3000/v1/products/'+ $routeParams.id;
 	$http.get(url, {
 		headers: {
 			"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
 		}
 	}).success(function(response){
 		$scope.product = response;
 		console.log($scope.product);
 	});
 	

 	$scope.edProduct = function(id) {
        //debugger;
    $location.path('showProduct/'+id);
    $route.reload();
    };
 });
