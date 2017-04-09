productApp.controller('ProductListController', function($scope, $http, $products) {

    $products.getProducts()
        .success(
            function (data) {
                $scope.paintings = data;
            }
        );

    /*$http.get("http://127.0.0.1:8000/products/")
        .success(function(data) {
        $scope.paintings = data;
        console.log(data)
    });*/
});