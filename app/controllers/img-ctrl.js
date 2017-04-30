'use strict';
var productApp = angular.module('productApp');
productApp.controller('imageViewerController',['$scope', '$http', '$products', '$stateParams',
    function($scope, $http, $products, $stateParams) {

        function setSinglePainting(id) {
            $scope.paintings.forEach(function (paint) {
                if (id == paint.id){
                    $scope.paint = paint;
                    console.log(paint)
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
                        setSinglePainting($stateParams.id);
                        $scope.gallery = [];
                        console.log(parseInt($stateParams.id) +1);
                        var number = (parseInt($stateParams.id));
                        setLocalGallery(number -2);
                        setLocalGallery(number -1);
                        setLocalGallery(number +1);
                        setLocalGallery(number +2);
                    });

        }
        function setLocalGallery(id) {
            if($scope.paintings[id]){
                $scope.gallery.push($scope.paintings[id]);
                console.log($scope.gallery)
            }


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