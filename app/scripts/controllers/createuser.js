'use strict';

angular.module('wsApiApp')
.controller('CreateUserCtrl', function ($scope, $http, $route, $location, User) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    
    $scope.new = function() {
        debugger;
        var parameter = JSON.stringify({name:$scope.user.name, username:$scope.user.username,
         password:$scope.user.password,password_confirmation: $scope.user.password_confirmation});
        
        console.log(parameter);
        $http.post('http://localhost:3000/v1/signup', parameter).success(function(response){
            $location.path('/');
            $route.reload();
            console.log("Usuario Creado");
        });
    };
});
