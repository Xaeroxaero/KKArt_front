productApp.service('$blog', ['$http', function($http) {
    'use strict';
    this.getBlog = function () {
        return $http.get('http://localhost:8000/news/');
    };
}]);