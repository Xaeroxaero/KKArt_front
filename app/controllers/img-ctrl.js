'use strict';
var productApp = angular.module('productApp');
productApp.controller('imageViewerController',['$scope', '$http', '$products', '$stateParams',
    function($scope, $http, $products, $stateParams) {

        function setSinglePainting(id) {
            $scope.paintings.forEach(function (paint) {
                if (id == paint.id){
                    $scope.paint = paint
                }
            })
        }

        /**
         * set product data
         */
        function setProductData() {
            $products.getProducts()
                .success(
                    function (data) {
                        $scope.paintings = data.results;
                        console.log(data.results);
                        setSinglePainting($stateParams.id);
                        console.log($scope.paint)
                    });

        }

        /**
         * controller init
         */
        $scope.init = function () {
            setProductData();
        };

        $scope.init();
    }]
);