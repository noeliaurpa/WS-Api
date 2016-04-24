'use strict';

angular.module('wsApiApp')
.service('User', function ($resource) {
    return $resource('http://localhost:3000/v1/users/:id');

});
