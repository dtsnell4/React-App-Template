(function () {

    angular.module('AppCentral.core.login')
        .factory('loginProvider', loginProvider);

    function loginProvider($q, $http, $window, config, $timeout,
        $location, $rootScope, localStorageService, jwtHelper) {
        var user;
        /*
        {
              'NSUID': '',
              'unique_name': ''
              'email': '',
              'sub': '',
              'user_id': '',
              'iss': '',
              'aud': '',
              'exp': ,
              'nbf': 
            }
         */
        var apiurl = config.appCentralApi;
        var refreshing;
        getAuthData();
        window.isLoggedIn = isLoggedIn;
        var factory = {
            getUser: getUser,
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            refreshToken: refreshToken
        };
        return factory;

        function refreshToken() {
            if (refreshing !== undefined) {
                return refreshing;
            }
            var authData = localStorageService.get('authorizationData');

            if (!authData) {
                authData = appcentral.auth.authorizationData('authorizationData');
            }

            refreshing = $http({
                url: apiurl + 'auth/token',
                skipAuthorization: true,
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj) {
                        if (obj.hasOwnProperty(p)) {
                            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                        }
                    }
                    return str.join('&');
                },
                data: {
                    /*jshint camelcase: false */
                    grant_type: 'refresh_token',
                    refresh_token: authData != null ? authData.refreshToken : null,
                    client_id: 'appcentral'
                }
            }).success(function (response) {
                /*jshint camelcase: false */

                var tokenPayload = jwtHelper.decodeToken(response.access_token);
                localStorageService.set('authorizationData',
                    {
                        token: response.access_token,
                        userName: tokenPayload.sub,
                        token_type: response.token_type,
                        refreshToken: response.refresh_token,
                        useRefreshTokens: true
                    });
                user = tokenPayload;
                user.isLoggedIn = true;

                $rootScope.loggedin = true;
                $rootScope.$broadcast('user:loaded', user);
                $rootScope.$broadcast('roles:reloaded', user);
                refreshing = undefined;

            }).error(function () {
                refreshing = undefined;
                logout();

            });
            return refreshing;
        }

        function getAuthData() {
            var authData = localStorageService.get('authorizationData');

            if (!authData) {
                authData = appcentral.auth.authorizationData('authorizationData');
            }

            if (authData != undefined && authData != null && authData != "'authData' is undefined") {
                var expired = jwtHelper.isTokenExpired(authData.token);
                if (!expired) {
                    var tokenPayload = jwtHelper.decodeToken(authData.token);
                    user = tokenPayload;
                    user.isLoggedIn = true;
                    $rootScope.loggedin = true;
                    $rootScope.$broadcast('user:loaded', user);
                }

            }
        }

        function getUser() {
            return user;
        }

        function login() {
            console.log("logging in");
            return $window.location.replace(config.loginUrl);
        }
        function logout() {
            //debugger;
            localStorageService.remove('originalToken');

            localStorageService.remove('instance');
            //localStorageService.remove('returnUrl');
            console.log('appcentral.core logout ', config.loginUrl);
            localStorageService.remove('authorizationData');
            localStorage.removeItem('persist:root');
            window.location = config.loginUrl;
            return true;
        }

        function isLoggedIn() {
            var authData = localStorageService.get('authorizationData');

            if (!authData) {
                authData = appcentral.auth.authorizationData('authorizationData');
            }

            if (authData) {
                var logged = jwtHelper.isTokenExpired(authData.token);
                return !logged;
            }
            return false;
        }

    }
})();