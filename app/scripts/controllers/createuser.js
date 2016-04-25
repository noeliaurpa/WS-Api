'use strict';

angular.module('wsApiApp')
.controller('CreateUserCtrl', function ($scope, $http, $route, $location, User) {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    debugger;
    $scope.new = function() {
        var user = $scope.user;
        User.save({user},function(data) {
            swal("User Name: " + data.username, "User Created!", "success");
            console.log("user create!");
            $location.path('/');
        }, function(error) {
            console.log('There was an error loading', error.statusText);
            swal("Error Creating User!", error.e, "error");

        });
    };
});
