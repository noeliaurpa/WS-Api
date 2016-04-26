'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:NewtransactionCtrl
 * @description
 * # NewtransactionCtrl
 * Controller of the wsApiApp
 */
angular.module('wsApiApp')
  .controller('NewtransactionCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://localhost:3000/v1/other_Product_id/', {
		headers: {
			"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
		}
	}).success(function(response){
		$scope.months = response;
	});

	$http.get('http://localhost:3000/v1/all', {
 		headers: {
 			"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
 		}
 	}).success(function(response){
 		$scope.days = response;
 	});
    //$scope.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    //$scope.days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
  });
