(function () {
    'use strict';

    var core = angular.module('AppCentral.core');

    core.run(noreload);

    function noreload($route, $rootScope, $location) {
        var original = $location.path;
        $location.path = function(path, reload) {
            if (reload === false) {
                var lastRoute = $route.current;
                var un = $rootScope.$on('$locationChangeSuccess', function() {
                    $route.current = lastRoute;
                    un();
                });
            }
            return original.apply($location, [path]);
        };
    }
})();