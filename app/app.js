'use strict';

var productApp = angular.module('productApp',['ui.router', 'duScroll' ])
    .value('duScrollOffset', 30)
    .value('duScrollDuration', 2000)
    .value('duScrollBottomSpy', true);

productApp.config(function($stateProvider, $locationProvider) {

    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            name: 'home',
            url: '/',
            templateUrl: '/template/home.html'
        })
        .state('blog',{
                name: 'blog',
                url: '/blog',
                templateUrl: '/blog/blog.html'
            });


    $locationProvider.html5Mode(true);


});
