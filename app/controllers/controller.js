'use strict';
var productApp = angular.module('productApp');
productApp.controller('ProductListController',['$scope', '$http', '$products' ,'$blog', '$document',
function($scope, $http, $products, $blog, $document) {

    $scope.scroll = function() {
        var someElement = angular.element(document.getElementById('some-id'));
        console.log($document);
        $document.scrollToElement(someElement, 0, 0);
    };

    function buildingFirstBlog(index) {
        if($scope.blog.results[index]){
            $scope.blogFirst.push($scope.blog.results[index]);
        }
    }

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