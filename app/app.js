'use strict';
var productApp = angular.module('productApp',[
    'ui.router'
]);

productApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'index.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('home.products', {
            url: '/products',
            templateUrl: '/template/products.html'
        });

});
