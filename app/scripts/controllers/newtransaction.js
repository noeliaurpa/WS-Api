'use strict';

/**
 * @ngdoc function
 * @name wsApiApp.controller:NewtransactionCtrl
 * @description
 * # NewtransactionCtrl
 * Controller of the wsApiApp
 */
 angular.module('wsApiApp')
 .controller('NewtransactionCtrl', function ($scope, $http, $location, $route, $routeParams) {
  this.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
  //mis productos
  $http.get('http://localhost:3000/v1/all', {
   headers: {
    "Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
  }
}).success(function(response){
 $scope.myproduc = response;
});

//el producto que yo quiero
$http.get('http://localhost:3000/v1/products/'+ $routeParams.id, {
 headers: {
  "Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
}
}).success(function(response){
 $scope.product = response;
 console.log($scope.product);
});
    //$scope.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    //$scope.days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

    $scope.newTran = function() {
      debugger;
      var parameter = JSON.stringify({product_req_id:$routeParams.id, product_offered_id:$scope.selected.id});
      console.log($scope.myproduc);
      console.log(parameter);
      $http.post('http://localhost:3000/v1/transactions', parameter, {
        headers: {
          "Authorization": 'Token token="' + JSON.parse(sessionStorage.getItem("ngStorage-token")) + '"'
        }
      }).success(function(response){
        $location.path('/transaction');
        $route.reload();
        console.log("Transaccion Creada");
      });

    };
  });
