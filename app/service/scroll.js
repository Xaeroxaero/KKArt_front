
'use strict';

productApp.service('$scroll',
    ['$document',
        function ($document) {

            this.Scroll = function (id) {
                var container = angular.element(document.getElementById('container'));
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