
productApp.service('$contact', ['$http', function($http) {
    'use strict';

    this.postContact = function () {
        return $http.post('http://localhost:8000/contact/', data);
    };
}]);