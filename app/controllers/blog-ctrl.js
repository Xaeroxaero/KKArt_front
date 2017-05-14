/**
 * Created by XX on 2017-05-14.
 */
'use strict';
var productApp = angular.module('productApp');
productApp.controller('BlogListController',
    ['$scope', '$http', '$blog', '$document',
        function ($scope, $http, $blog, $document) {


            function buildingFirstBlog(index) {
                if ($scope.blog.results[index]) {
                    $scope.blogFirst.push($scope.blog.results[index]);
                }
            }

            $scope.scroll = function (id) {
                $document.on('scroll', function () {
                });
                var container = angular.element(document.getElementById('container'));
                container.on('scroll', function () {
                });
                setTimeout(function () {
                        var someElement = angular.element(document.getElementById(id));
                        if (id === 'contact') {
                            $document.duScrollToElementAnimated(someElement, -174)
                        }
                        else {
                            $document.duScrollToElementAnimated(someElement)
                        }
                    }, 100
                );
            };
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
                        }
                    )
            };
            $scope.init();
        }]
);