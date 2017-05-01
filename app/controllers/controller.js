'use strict';
var productApp = angular.module('productApp');
productApp.controller('ProductListController',
['$scope', '$http', '$products' ,'$blog', '$document',
function($scope, $http, $products, $blog, $document) {


    function buildingFirstBlog(index) {
        if($scope.blog.results[index]){
            $scope.blogFirst.push($scope.blog.results[index]);
        }
    }
    $document.on('scroll', function() {
        console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());
    });
    var container = angular.element(document.getElementById('container'));
    container.on('scroll', function() {
        console.log('Container scrolled to ', container.scrollLeft(), container.scrollTop());
    });

    $scope.scroll = function(id) {
        setTimeout(function ()
            {
                var someElement = angular.element(document.getElementById(id));
                if (id==='contact'){
                $document.duScrollToElementAnimated(someElement, -174)
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