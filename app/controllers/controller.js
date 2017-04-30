'use strict';
var productApp = angular.module('productApp');
productApp.controller('ProductListController',
['$scope', '$http', '$products' ,'$blog', '$document','$state',
function($scope, $http, $products, $blog, $document, $state) {


    function buildingFirstBlog(index) {
        if($scope.blog.results[index]){
            $scope.blogFirst.push($scope.blog.results[index]);
        }
    }

        $scope.double = function (id) {

        };

    $scope.scroll = function(id) {
        setTimeout(function () {
                var someElement = angular.element(document.getElementById(id));
                $document.scrollToElementAnimated(someElement);
            }, 100
        );
    };


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

    $scope.init = function () {

        console.log($state.$current);

        $products.getProducts()
            .success(
                function (data) {
                    $scope.paintings = data;
                })
            .catch(
                function(err){
                    console.log(err);
                });
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
            )
            .catch(
                function(err){
                    console.log(err);
                });
        $scope.newName = "";

    };

    $scope.init();
}]
);