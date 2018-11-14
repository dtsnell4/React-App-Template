(function () {
    angular.module('AppCentral.core.login').config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'app/login/blank.tpl.html',
                controller: 'LoginController'
            });
    }
})();