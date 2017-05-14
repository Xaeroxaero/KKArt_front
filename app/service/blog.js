'use strict';
productApp.service('$blog', ['$http', function($http) {
    this.getBlog = function () {
        return $http.get('http://localhost:8000/news/');
    };
}]);