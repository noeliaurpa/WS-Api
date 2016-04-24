'use strict';

angular.module('wsApiApp')
.service('Session', function ($resource) {
    return $resource('http://localhost:3000/v1/sessions/:id');

});
