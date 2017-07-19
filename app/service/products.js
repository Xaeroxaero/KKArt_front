'use strict';
productApp.service('$products', ['$http', function ($http) {
    this.getProducts = function () {
        return $http.get('http://80.211.198.17:9000/products/');
    };
}]);