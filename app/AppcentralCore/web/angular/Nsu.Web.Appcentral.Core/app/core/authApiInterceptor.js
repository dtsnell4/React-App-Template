(function () {
    'use strict';

    var core = angular.module('AppCentral.core');

    /* @ngInject */
    core.factory("AuthApiInterceptor", function ($q, $location, localStorageService, config) {
        return {
            responseError: function (response) {
                if (response.status === 401) {
                    if ($location.$$path !== "/login" && $location.$$path !== "/login/") {
                        var returnUrl = $location.$$absUrl;
                        localStorageService.set('returnUrl', { data: returnUrl });
                    }
                    console.log('response error 401 redirect to ', config.loginUrl);
                    window.location = config.loginUrl;
                } else if (response.status === 403) {
                    //debugger;
                    var currenInstance = $location.$$path.split('/')[1];
                    console.log('response error 403 redirect to ', '/' + currenInstance + '/authorization');
                    $location.path('/' + currenInstance + '/authorization');
                    $location.replace();
                    //$location.path('/' + currentInstance.getInstance().slug + '/authorization');
                }
                
                return $q.reject(response);
            }

        };
    });

    core.config(function ($httpProvider) {
        $httpProvider.interceptors.push("AuthApiInterceptor");
    });

})();