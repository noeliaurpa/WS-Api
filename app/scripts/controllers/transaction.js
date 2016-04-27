'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:TransactionCtrl
 * @description
 * # TransactionCtrl
 * Controller of the wsApiApp
 */
 angular.module('wsApiApp')
 .controller('TransactionCtrl', function ($scope, $http, $route, transaction, $localStorage, $rootScope, $location) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$http.get('http://localhost:3000/v1/all_transactions', {
 		headers: {
 			"Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
 		}
 	}).success(function(response){
 		$scope.transactions = response;
 	}).catch(function(response) {
    alert('Failed: You have not log in. Please log');
    $location.path('/');
  });
//-------------------------------------------------------------------------------------------------------------------------------------
 	$scope.deleteTransaction = function(id) {
      //Product.delete({'id': id});
      //debugger;
      //var parameter = id;

    //console.log(parameter);
    //console.log("'http://localhost:3000/v1/products/" + id + "'");
    var url = "http://localhost:3000/v1/transactions/" + id ;
    $http.delete(url , {
      headers: {
        "Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
      }
    }).success(function(response){
    	debugger;
      $location.path('/transaction');
      $route.reload();
      console.log("Transaccion Eliminado");
    });

  };
 });

