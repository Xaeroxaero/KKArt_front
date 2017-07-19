'use strict';
productApp.service('$blog', ['$http', function ($http) {
    this.getBlog = function () {
        return $http.get('http://80.211.198.17/news/');
    };
}]);