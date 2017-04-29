'use strict';

var productApp = angular.module('productApp',['ui.router', 'duScroll' ])
    .value('duScrollOffset', 30)
    .value('duScrollDuration', 2000)
    .value('duScrollBottomSpy', true);

productApp.config(function($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            name: 'home',
            url: '/',
            templateUrl: 'template/home.html'
        })
        .state('blog',{
                name: 'blog',
                url: '/blog',
                templateUrl: 'template/blog.html'
            })
        .state('img-viewer',{
            name: 'img-viewer',
            url: '/image/:id',
            templateUrl: 'img_viewer/img_viewer.html',
            controller:'imageViewerController'
        });




});
