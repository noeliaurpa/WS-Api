
'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:ClosesessionCtrl
 * @description
 * # ClosesessionCtrl
 * Controller of the wsApiApp
 */
 angular.module('wsApiApp')
 .controller('ClosesessionCtrl', function ($scope, $http, $location, $sessionStorage, $route) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	var url = "http://localhost:3000/v1/signout";
 	$http.delete(url , {
 		headers: {
 			"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
 		}
 	}).success(function(response){
 		$location.path('/');
 		$route.reload();
 		console.log("Close session");
 	}).catch(function(response) {
 		alert('Failed: You have not log in. Please log');
 		$location.path('/');
 	});
 });
