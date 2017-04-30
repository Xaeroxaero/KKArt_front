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


    $scope.scroll = function(id) {
        setTimeout(function ()
            {
                var someElement = angular.element(document.getElementById(id));
                if (id==='contact'){
                $document.duScrollToElementAnimated(someElement,500)
                }
                else {
                    $document.duScrollToElementAnimated(someElement)
                }

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

        $products.getProducts()
            .success(
                function (data) {
                    $scope.paintings = data;
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