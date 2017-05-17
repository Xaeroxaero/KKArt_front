'use strict';
var productApp = angular.module('productApp');
productApp.controller('BlogListController',
    ['$scope', '$http', '$blog',
        function ($scope, $http, $blog) {


            function buildingFirstBlog(index) {
                if ($scope.blog.results[index]) {
                    $scope.blogFirst.push($scope.blog.results[index]);
                }
            }

            $scope.init = function () {
                $blog.getBlog()
                    .success(
                        function (data) {
                            $scope.blog = data;
                            $scope.blog.results.reverse();
                            $scope.blogFirst = [];
                            buildingFirstBlog(0);
                            buildingFirstBlog(1);
                            buildingFirstBlog(2);
                            $scope.$emit('scrolluj');
                        }
                    )
            };
            $scope.init();
        }]
);