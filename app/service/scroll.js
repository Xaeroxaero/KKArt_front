'use strict';
productApp.service('$scroll',
    ['$document',
        function ($document) {
            this.Scroll = function (id) {
                setTimeout(function () {
                        var someElement = angular.element(document.getElementById(id));
                            $document.duScrollToElementAnimated(someElement)
                    }, 100
                );
            };
        }]
);