(function () {
    angular.module('AppCentral.core.help').config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/:slug/help', {
                templateUrl: 'app/help/help.tpl.html',
                title: 'Help View',
                controller: 'HelpViewController',
                controllerAs: 'help',
                resolve: {
                    instanceId: function () {
                        return 0;
                    }
                }
            });
    }
})();