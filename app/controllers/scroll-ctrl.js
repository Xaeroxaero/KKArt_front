'use strict';
var productApp = angular.module('productApp');
productApp.controller('ScrollController',
    ['$scope', '$scroll',
        function ($scope, $scroll) {

            $scope.scroll = function (id) {
                $scroll.futureId = id
            };

            $scope.$on('scrolluj', function() {
                    if($scroll.futureId){
                        $scroll.Scroll($scroll.futureId);
                        $scroll.futureId = null;
                    }
                }
            );
        }]

);