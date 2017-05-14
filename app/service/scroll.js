
'use strict';

productApp.service('$scroll',
    ['$document',
        function ($document) {

            this.scroll = function (id) {
                $document.on('scroll', function () {
                });
                var container = angular.element(document.getElementById('container'));
                container.on('scroll', function () {
                });
                setTimeout(function () {
                        var someElement = angular.element(document.getElementById(id));
                        if (id === 'contact') {
                            $document.duScrollToElementAnimated(someElement, -174)
                        }
                        else {
                            $document.duScrollToElementAnimated(someElement)
                        }
                    }, 100
                );
            };
        }]
);