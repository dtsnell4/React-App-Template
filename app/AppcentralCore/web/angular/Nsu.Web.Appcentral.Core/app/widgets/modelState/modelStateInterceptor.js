(function () {
    'use strict';

    var core = angular.module('AppCentral.core');

    core.factory('ModelStateInterceptor', modelStateInterceptor);

    /** @ngInject */
    function modelStateInterceptor($rootScope, $q) {
        return {
            responseError: function(response) {
                if (response.status === 400) {
                    if (response.data.modelState) {
                        $rootScope.modelStateError = response.data.modelState;
                    }
                }
                return $q.reject(response);
            }
        };
    }
    core.config(function ($httpProvider) {
        $httpProvider.interceptors.push('ModelStateInterceptor');
    });

})();