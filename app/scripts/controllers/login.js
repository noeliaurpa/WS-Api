'use strict';

angular.module('wsApiApp')
.controller('LoginCtrl', function ($scope, $http, $route, $localStorage, $location,$rootScope,
    $sessionStorage, Session) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    
    $scope.new = function() {
        var session = $scope.user;
        Session.save({username: session.username, password: session.password},function(data) {
            $scope.$storage = $sessionStorage.token = data.access_token;
            $rootScope.name = 'anonymous'; 
            console.log( $sessionStorage.token);
            console.log(sessionStorage.length);
            $location.path('/dashboard');
            // $route.reload();
        }, function(error) {
            console.log('There was an error loading', error.statusText);
            

        });
    };
});
