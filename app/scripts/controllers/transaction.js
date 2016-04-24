'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:TransactionCtrl
 * @description
 * # TransactionCtrl
 * Controller of the wsApiApp
 */
 angular.module('wsApiApp')
 .controller('TransactionCtrl', function ($scope, $http, $route, transaction, $localStorage, $rootScope) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$http.get('http://localhost:3000/v1/transactions/', {
 		headers: {
 			"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
 		}
 	}).success(function(response){
 		$scope.transactions = response;
 	});
 });

