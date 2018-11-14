(function () {
    'use strict';

    var core = angular.module('AppCentral.core');
     
    core.config(function ($httpProvider, jwtInterceptorProvider, config, $translateProvider) {
        
        //TODO
        //language/translations/Es
     
        $translateProvider.useStaticFilesLoader({
            //prefix: config.appCentralApi + 'language/translations/',
            prefix: config.appCentralApi + 'static/json/json/',
            suffix: ''
        });            

        $translateProvider.preferredLanguage((navigator.language || navigator.userLanguage).split("-")[0]);


        jwtInterceptorProvider.tokenGetter = /*@ngInject*/function (jwtHelper, $http, localStorageService, loginProvider, $rootScope) {
            var authData = localStorageService.get('authorizationData');

            if (!authData) {
                authData = appcentral.auth.authorizationData('authorizationData');
            }

            if (!authData) {
                return null;
            }
            var token = authData.token;
            if (jwtHelper.isTokenExpired(token)) {
                return loginProvider.refreshToken().then(function(auth) {
                    $rootScope.$broadcast('token-refreshed');
                    return auth.data.access_token;
                });
            } else {
                //console.log("old token ", token);
                return token;
            }
        }
        $httpProvider.interceptors.push('jwtInterceptor');
    });

})();