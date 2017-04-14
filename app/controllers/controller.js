


productApp.controller('ProductListController', function($scope, $http, $products) {
    'use strict';
    $products.getProducts()
        .success(
            function (data) {
                $scope.paintings = data;
            }
        );
    $scope.newName = "";
    $scope.sendPost = function() {
        var data = ({
            json: JSON.stringify({
                email: $scope.newName
            })
        });
        $http.post("'http://localhost:8000/contact/'", data).success(function (data) {
            $scope.email = data;
        });
    };

})