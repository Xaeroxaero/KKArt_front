'use strict';

var productApp = angular.module('productApp',['ui.router' ]);

productApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('news', {
            url: '/',
            templateUrl: '/template/news.html'
        })

        .state('products', {
            url: '/products',
            templateUrl: '/template/products.html'
        })
        .state('contact', {
            url: '/',
            templateUrl: '/template/contact.html'
        });

});
