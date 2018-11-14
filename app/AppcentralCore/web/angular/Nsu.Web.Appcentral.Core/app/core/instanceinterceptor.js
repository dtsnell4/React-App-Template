(function () {
    'use strict';

    var core = angular.module('AppCentral.core');

    /* @ngInject */
    core.factory('currentInstance', currentInstance);

    function currentInstance($window, $q, $location,
        localStorageService, Instances, $rootScope) {
        var instance = localStorageService.get('instance');
        var instancePromise;
        var factory = {
            setInstance: setInstance,
            getInstance: getInstance,
            isInit:isInit,
            getInstancePromise: getPromise
        };
        return factory;

        function isInit() {
            
        }
        function getPromise() {
            
            return instancePromise;
        }
        function setInstance(slug) {
            //debugger;
            instance = localStorageService.get('instance');
            if (instance && instance.slug === slug) {
                var deferred = $q.defer();
                deferred.resolve(instance);
                $rootScope.$broadcast('reload-menuitems');
                $rootScope.$broadcast('instance-loaded');
                return deferred.promise;
            }

            localStorageService.remove('instance');

            instancePromise = Instances.query({slug: slug}, function (data) {
                localStorageService.set('instance', data[0]);
                instance = data[0];
                $rootScope.$broadcast('instance-loaded');
                $rootScope.$broadcast('reload-menuitems');
            }).$promise;
            
            return instancePromise;
        }
        function getInstance() {
            if (instance) {
                return instance;
            }
            return null;
        }
    }
})();