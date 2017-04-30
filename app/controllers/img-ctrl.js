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
                        $scope.gallery = [];
                        setLocalGallery($stateParams.id -2);
                        setLocalGallery($stateParams.id -1);
                        setLocalGallery($stateParams.id +1);
                        setLocalGallery($stateParams.id +2);
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