'use strict';

var productApp = angular.module('productApp',['ui.router' ]);

productApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('blog', {
            url: '/blog',
            templateUrl: '/blog/blog.html'
        })

        .state('image_viewer', {
            ulr:'/image',
            templateUrl: 'img_viewer/img_viewer.html'
        })
        .state("home", {
            views: {
                'product': {
                    templateUrl: 'template/product.html'
                },
                'about': {
                    templateUrl: 'template/about.html'
                },
                'contact': {
                    templateUrl: 'template/contact.html'
                }
            }
        })
});
