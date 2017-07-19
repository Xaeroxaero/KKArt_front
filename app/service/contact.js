'use strict';
productApp.service('$contact', ['$http', function ($http) {
    this.postContact = function () {
        return $http.post('http://80.211.198.17/contact/', data);
    };
}]);