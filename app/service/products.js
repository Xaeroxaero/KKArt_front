

productApp.service('$products', ['$http', function($http) {
    'use strict';
    this.getProducts = function () {
        return $http.get('http://localhost:8000/products/');
    };
}]);