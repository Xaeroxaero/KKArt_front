'use strict';
var productApp = angular.module('productApp');
productApp.controller('ProductListController',
    ['$scope', '$http', '$products', '$document', '$contact',
        function ($scope, $http, $products, $document, $contact) {


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
            $scope.sendPost = function () {
                var data = {
                    email: $scope.newMail,
                    subject: $scope.newSubject,
                    body: $scope.newBody
                };
                $contact.postContact()
                    .success(
                        function (data) {
                            $scope.message = data;
                        });
            };
            $scope.init = function () {

                $products.getProducts()
                    .success(
                        function (data) {
                            $scope.paintings = data;
                        });
            };
            $scope.init();
        }]
);