(function () {

    angular
        .module('AppCentral.core.layout')
        .directive('appcentraltopnav', applicationtopnav);

    function applicationtopnav() {
        var directive = {
            controller: applicationtopnavController,
            controllerAs: 'topnav',
            templateUrl: 'app/layout/topnav.tpl.html',
            restrict: 'EA'
        };

        /*@ngInject*/
        function applicationtopnavController($scope, $rootScope, $http, $q, loginProvider, $userPicker, $window, config, currentInstance, currentUser, AnnouncementsCoreResource, $modal, authorizationService, localStorageService, toastr, $translate, $location) {
            var vm = this;
            vm.logout = logout;
            vm.Impersonate = Impersonate;
            vm.reload = reload;
            vm.appName = config.appName;
            vm.instanceName = '';
            vm.canImpersonate = false;
            vm.checkToken = checkToken;
            vm.backToUser = false;
            vm.checkRolesAndToken = checkRolesAndToken;
            vm.topmenu = [];
            vm.goBackToUser = goBackToUser;
            vm.originalToken = localStorageService.get('originalToken');
            vm.user = '';
            vm.userToImpersonate = '';
            vm.timezone = new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1];
            vm.redirectToReact = redirectToReact;

            ////reload(); 
            /*
            window.addEventListener('langchanged', function (e) {                                                
                console.log('lang changed', e.detail);
                $translate.use(e.detail);
            });
            */

            function goBackToUser() {
                var authData = localStorageService.get('originalToken');

                if (!authData) {
                    authData = appcentral.auth.authorizationData('authorizationData');
                }

                localStorageService.set('authorizationData',
                    {
                        token: authData.token,
                        userName: authData.userName,
                        token_type: authData.token_type,
                        refreshToken: authData.refreshToken,
                        useRefreshTokens: true
                    });
                localStorageService.remove('originalToken');
                vm.originalToken = '';
                $window.location.reload();
            }

            function Impersonate() {
                $userPicker({
                    buttonText: 'Impersonate',
                    title: 'Impersonate User',
                    items: [],
                    search: {
                        populationId: 0,
                        search: '',
                        banner: false
                    },
                    url: config.appCentralApi + 'users',
                }, {
                        controllerAs: 'impersonate',
                        templateUrl: 'app/layout/impersonate.tpl.html'
                    }).then(function (userToImpersonate) {
                        $http({
                            url: config.appCentralApi + 'users/' + userToImpersonate.userId + '/token',
                            method: 'GET'
                        }).success(function (token) {

                            var authData = localStorageService.get('authorizationData');

                            if (!authData) {
                                authData = appcentral.auth.authorizationData('authorizationData');
                            }


                            localStorageService.set('originalToken',
                                {
                                    token: authData.token,
                                    userName: authData.userName,
                                    token_type: authData.token_type,
                                    refreshToken: authData.refreshToken,
                                    useRefreshTokens: false
                                });
                            vm.originalToken = localStorageService.get('originalToken');

                            localStorageService.set('authorizationData',
                                {
                                    token: token,
                                    userName: userToImpersonate.userName,
                                    token_type: 'bearer',
                                    refreshToken: '',
                                    useRefreshTokens: false
                                });
                            $window.location.reload();
                        }).error(function (error) {
                            toastr.error('Error impersonating', 'Error!');
                        });
                    });
            }

            function redirectToReact(menuOption) {
                var loginPath = localStorageService.get("authorizationData") ? 'login/' + localStorageService.get("authorizationData").refreshToken + '/' + encodeURIComponent(menuOption.applicationFolder + '/' + menuOption.slug) :
                    'login/' + menuOption.applicationFolder + '/' + menuOption.slug;
                if (window.location.host == 'fldvd-webnet01.ad.nova.edu') {
                    window.location.href = 'http://fldvd-webnet01.ad.nova.edu/appcentral2/appcentral/' + loginPath;
                } else if (window.location.host == 'fldvt-webnet01.ad.nova.edu') {
                    window.location.href = 'http://fldvt-webnet01.ad.nova.edu/appcentral2/appcentral/' + loginPath;
                } else if (window.location.host == 'appcentral-stage.nova.edu') {
                    // window.location.href = 'https://appcentral2stage.nova.edu/appcentral/login/' + localStorageService.get("authorizationData").refreshToken + '/' + encodeURIComponent(menuOption.applicationFolder + '/' + menuOption.slug);
                    window.location.href = 'https://appcentral-stage.nova.edu/app2/appcentral/' + loginPath;
                } else if (window.location.host == 'appcentral.nova.edu') {
                    // window.location.href = 'https://appcentral2.nova.edu/appcentral/login/' + localStorageService.get("authorizationData").refreshToken + '/' + encodeURIComponent(menuOption.applicationFolder + '/' + menuOption.slug);
                    window.location.href = 'https://appcentral.nova.edu/app2/appcentral/' + loginPath;
                } else {
                    window.location.href = window.location.protocol + '//' + window.location.hostname + (window.location.port != "" ? ':8000' : "/appcentral2/appcentral") + '/login/' + localStorageService.get("authorizationData").refreshToken + '/' + encodeURIComponent(menuOption.applicationFolder + '/' + menuOption.slug);
                }
            }

            function checkRolesAndToken(user) {
                var authData = localStorageService.get('originalToken');

                if (authData == null) {
                    var instanceId = currentInstance.getInstance().id;
                    //debugger;
                    var rolesIn = authorizationService.getRoles(instanceId).then(function (data) {
                        if (data.indexOf('impersonate_user') != -1) {
                            var originalTokenExist = checkToken();
                            if (originalTokenExist == false) {
                                vm.canImpersonate = true;
                            } else { vm.canImpersonate = false; }
                        } else { vm.canImpersonate = false; }

                    });
                } else { vm.backToUser = true; }

            }

            function checkToken() {
                var authData = localStorageService.get('originalToken');
                if (authData != null) {
                    vm.backToUser = true;
                } else { vm.backToUser = false; }
                return vm.backToUser;
            }


            function reload() {
                return;
                console.log("aa topnav reload");
                vm.topmenu = [];
                vm.user = loginProvider.getUser();
                getTopMenu();

            }

            $rootScope.$on('reload-menuitems', function () {
                if (currentInstance.getInstance() && vm.appName !== currentInstance.getInstance().name) {
                    vm.instance = currentInstance.getInstance();
                    vm.instanceName = currentInstance.getInstance().name;

                } else {
                    currentInstance.getInstancePromise().then(function () {
                        vm.instance = currentInstance.getInstance();
                        vm.instanceName = currentInstance.getInstance().name;

                    });
                }
                //console.log("bb topnav menus");
                getTopMenu();
            });

            function getTopMenu() {

                vm.user = loginProvider.getUser();
                if (vm.user && vm.user.user_id) {

                    vm.topmenu = currentUser.instances();

                }
            }

            function logout() {

                if (sessionStorage.getItem('typeOfLogin') == 'cas') {
                    if (location.host == 'appcentral.nova.edu') {
                        config.loginUrl = "https://eis.nova.edu/cas/logout/";
                        window.location = "https://eis.nova.edu/cas/logout";
                    }
                    else {
                        config.loginUrl = "https://eisdev.nova.edu/cas/logout";
                        window.location = "https://eisdev.nova.edu/cas/logout";
                    }
                }

                loginProvider.logout();
                reload();
                console.log("logout");
                $window.location.replace(config.loginUrl);
            }

            vm.reloadMenus = function () {
                $rootScope.$broadcast('reload-menuitems');
                console.log("reloading menu-items");
            };

            vm.goToProfile = function () {
                $location.url('/:slug/users/userprofile');
            }

            vm.changePassword = function () {
                $location.url('/:slug/users/resetpassword');
            }

            //vm.reloadMenus();

        }

        return directive;
    }




})();