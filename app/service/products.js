productApp.service('$products', ['$http', function($http) {

    this.getProducts = function () {
        return $http.get('http://localhost:8000/products/');
    };
}]);