(function() {
    angular.module('AppCentral.authorization').config(config);

/* @ngInject */
    function config($routeProvider) {

        $routeProvider
            .when('/:slug/authorization', {
                templateUrl: 'app/authorization/authorization.tpl.html',
                controller: 'authorizationController',
                controllerAs: 'vm',
                resolve: {
                    slugIns: function ($q) {
                        var deferred = $q.defer();
                        deferred.resolve('AWESOME');
                        return deferred.promise;
                    }
                }
            });
    }
})();