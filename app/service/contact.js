'use strict';
productApp.service('$contact', ['$http', function ($http) {
    this.postContact = function () {
        return $http.post('http://localhost:8000/contact/', data);
    };
}]);