'use strict';

var productApp = angular.module('productApp',['ui.router', 'duScroll', 'angularUtils.directives.dirPagination'])
        .value('duScrollBottomSpy', true)
        .value('duScrollOffset', 80)
        .value('duScrollDuration',1300)
        .value('duScrollCancelOnEvents', false);

productApp.config(function($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            name: 'home',
            url: '/',
            templateUrl: 'template/home.html',
            controller: 'ProductListController'
        })
        .state('blog',{
                name: 'blog',
                url: '/blog',
                templateUrl: 'template/blog.html',
                controller: 'BlogListController'
            })

        .state('img-viewer',{
            name: 'img-viewer',
            url: '/image/:id',
            templateUrl: 'template/img_viewer.html',
            controller:'imageViewerController'
        });




});
