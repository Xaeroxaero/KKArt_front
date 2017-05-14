'use strict';
var productApp = angular.module('productApp');
productApp.controller('imageViewerController', ['$scope', '$http', '$products', '$stateParams',
    function ($scope, $http, $products, $stateParams) {

        function setSinglePainting(id) {
            $scope.paintings.forEach(function (paint) {
                if (id == paint.id) {
                    $scope.paint = paint;
                }
            })
        }

        function setProductData() {
            $products.getProducts()
                .success(
                    function (data) {
                        $scope.paintings = data.results;
                        setSinglePainting($stateParams.id);
                        $scope.gallery = [];
                        var number = (parseInt($stateParams.id));
                        var long = $scope.paintings.length;
                        if (number == 2) {
                            setLocalGallery(long - number + 1);
                            setLocalGallery(number - 2);
                            setLocalGallery(number);
                            setLocalGallery(number + 1);
                        }
                        else if (number == 1) {
                            setLocalGallery(long - number - 1);
                            setLocalGallery(long - number);
                            setLocalGallery(number);
                            setLocalGallery(number + 1);
                        }
                        else if (number == long) {
                            setLocalGallery(number - 3);
                            setLocalGallery(number - 2);
                            setLocalGallery(number - long);
                            setLocalGallery(number + 1 - long);
                        }
                        else if (number == long - 1) {
                            setLocalGallery(number - 3);
                            setLocalGallery(number - 2);
                            setLocalGallery(number);
                            setLocalGallery(number + 1 - long);
                        }
                        else {
                            setLocalGallery(number - 3);
                            setLocalGallery(number - 2);
                            setLocalGallery(number);
                            setLocalGallery(number + 1);
                        }
                    });

        }

        function setLocalGallery(id) {
            if ($scope.paintings[id]) {
                $scope.gallery.push($scope.paintings[id]);
            }


        }

        $scope.init = function () {
            setProductData();
        };

        $scope.init();
    }]
);