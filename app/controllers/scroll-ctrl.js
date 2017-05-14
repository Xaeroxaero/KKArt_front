'use strict';
var productApp = angular.module('productApp');
productApp.controller('ScrollController',
    ['$scope', '$scroll',
        function ($scope, $scroll) {
            $scope.scroll = $scroll.Scroll;
        }]
);