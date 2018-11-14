angular.module('AppCentral.core.filters')

        .filter('escape', function () {
            return window.encodeURIComponent;
        });