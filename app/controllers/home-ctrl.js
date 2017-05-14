'use strict';
var productApp = angular.module('productApp');
productApp.controller('ProductListController',
    ['$scope', '$http', '$products', '$contact',
        function ($scope, $http, $products, $contact) {


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