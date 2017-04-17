'use strict';
var productApp = angular.module('productApp');
productApp.controller('ProductListController',['$scope', '$http', '$products' ,'$blog',
function($scope, $http, $products, $blog) {

    function buildingFirstBlog(index) {
        if($scope.blog.results[index]){
            $scope.blogFirst.push($scope.blog.results[index]);
        }
    }

    $products.getProducts()
        .success(
            function (data) {
                $scope.paintings = data;
            }
        );
    $blog.getBlog()
        .success(
            function (data) {
                $scope.blog = data;
                $scope.blog.results.reverse();
                $scope.blogFirst = [];
                buildingFirstBlog(0);
                buildingFirstBlog(1);
                buildingFirstBlog(2);
            }
        );
    $scope.newName = "";
    $scope.sendPost = function() {
        var data = {
            email: $scope.newMail,
            subject: $scope.newSubject,
            body: $scope.newBody
        };
        $http.post("http://localhost:8000/contact/", data).success(function (data) {
            $scope.message = data;
        });
    };

}]
);