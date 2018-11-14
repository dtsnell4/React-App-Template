(function () {
    angular
      .module('AppCentral.core.layout')
      .directive('appcentralsidenav', applicationSidenav);

    function applicationSidenav() {
        var directive = {
            controller: applicationSidenavController,
            controllerAs: 'sidebar',
            templateUrl: 'app/layout/sidenav.tpl.html',
            restrict: 'EA'
        };

        /*@ngInject*/
        //revrite this as angular without jquery at some point
        function applicationSidenavController(currentUser, loginProvider, $location,
            $rootScope, $route, menu, currentInstance, authorizationService,helpService,config) {
            var vm = this;

            vm.dashboard = config.dashboard;
            initSubmenu();
            vm.showSidebar = true;
            vm.notifications = 170; //create service to get number of notifications
            vm.appFolder = '';
            
            var w = $('#cl-wrapper');
            if (localStorage.getItem("collapsed") === "true") {
                w.removeClass('sb-collapsed');
            } else {
                w.addClass('sb-collapsed');
            }

            vm.isActive = function (path) {

                if ($route.current && $route.current.loadedTemplateUrl && path === 'announcements/manage') {
                    return ($route.current.loadedTemplateUrl.indexOf('app/announcements/') === 0 && $route.current.originalPath.indexOf('manage') > 0);
                }

                if ($route.current && $route.current.loadedTemplateUrl && path === 'announcements') {
                    return ($route.current.loadedTemplateUrl.indexOf('app/announcements/') === 0 && $route.current.originalPath.indexOf('manage') === -1);
                }

                if ($route.current && $route.current.loadedTemplateUrl && path === 'notifications/manage') {
                    return ($route.current.loadedTemplateUrl.indexOf('app/notifications/') === 0 && $route.current.originalPath.indexOf('manage') > 0);
                }

                if ($route.current && $route.current.loadedTemplateUrl && path === 'notifications') {
                    return ($route.current.loadedTemplateUrl.indexOf('app/notifications/') === 0 && $route.current.originalPath.indexOf('manage') === -1);
                }

                path = '/:slug/' + path;
                if ($route.current && $route.current.regexp) {
                    return $route.current.regexp.test(path);
                }
                return false;
            };
            
            vm.menu = menu;
            vm.slug = '';

            activeMenu();

            vm.rolesInUser = [];
            vm.instanceRoles = []
            vm.reload = reload;
            vm.user = loginProvider.getUser();

            $rootScope.$on('user:loaded', reload);
            $rootScope.$on('reload-menuitems', reload);
            $rootScope.$on('$routeChangeSuccess', activeMenu);
            $rootScope.$on('roles-loaded', reload);

            function activeMenu() {


                helpService.addHelpMenuTo(vm.menu);
                if (vm.menu) {
                    angular.forEach(vm.menu, function (item) {
                        if (item.title === 'Notifications') {
                            item.label = vm.notifications;
                        }
                        if (item.path) {
                            item.active = vm.isActive(item.path.substring(1));
                        }
                        angular.forEach(item.submenu, function(sub) {

                            sub.active = vm.isActive(sub.path.substring(1));
                            if (sub.active) {
                                item.open = true;
                            }
                        });
                    });
                }
            }

            function reload() {
                console.log("reload called");
                activeMenu();
                currentInstance.getInstancePromise().then(function () {
                var instance = currentInstance.getInstance();
                if (vm.instance && vm.instance.id === instance.id) {
                    return;
                }
                vm.user = loginProvider.getUser();

                if (loginProvider.isLoggedIn() && instance) {
                    
                    vm.slug = instance.slug;
                    vm.instance = instance;
                    //vm.rolesIn = authorizationService.getRoles().then(function (data) {
                    //    vm.rolesInUser = data;
                    //});
                    vm.rolesInUser = currentUser.roles({ instanceId: instance.id });
                    // get instance roles //
                    //console.log("---------Get instance roles-----------");
                    /*******todos****/
                    vm.instanceRole = currentUser.hasRole({ userId: vm.user.user_id, roles: "announcements_approver,announcements_creator" });
                    vm.instanceRole.$promise.then(function (data)
                    {
                        angular.forEach(data, function (item)
                        {
                            angular.forEach(item.roleName, function (role)
                            {
                                if (vm.instanceRoles.indexOf(role) == -1 ) {
                                    vm.instanceRoles.push(role);
                                   
                                }
                            });
                        });
                        //console.log(vm.rolesInUser);
                    });

                }
                });
                
            }
            function rolInUsr() {
                return vm.rolesInUser;
            }

            function compRoles(userRoles, menuItemRoles) {
                return vm.compareRoles(userRoles, menuItemRoles);
            }

            vm.compareRoles = function (userRoles, menuItemRoles) {
                    
                if (!menuItemRoles || menuItemRoles.length === 0)
                {
                    return true;
                }
                // check instance side nav for instance role //
                for (var i = 0; i < menuItemRoles.length; i++) {
                    for (var j = 0; j < vm.instanceRoles.length; j++) {
                        if (menuItemRoles[i].name === vm.instanceRoles[j])
                        {
                            return true;
                        }
                    }
                }
                //------------------------------//
                if (!userRoles) {
                    return false;
                }
                var itemRoles = [];
                for (var k = 0; k < menuItemRoles.length; k++) {
                    itemRoles[k] = menuItemRoles[k].name;
                }
                for (var i = 0; i < userRoles.length; i++) {
                    for (var j = 0; j < itemRoles.length; j++) {
                        if (userRoles[i].name === itemRoles[j]) {
                            return true;
                        }
                    }
                }
                return false;
            };

            vm.toggleSidebar = function() {
                vm.showSidebar = !vm.showSidebar;
                if (!vm.showSidebar && !vm.initDone) {
                    initSubmenu();
                    vm.initDone = true;
                }
                if (w.hasClass('sb-collapsed')) {
                    w.removeClass('sb-collapsed');
                    localStorage.setItem("collapsed", true);
                } else {
                    w.addClass('sb-collapsed');
                    localStorage.setItem("collapsed", false);
                }
            };
            vm.toggleSidebarMobile = function() {
                vm.showSidebar = !vm.showSidebar;
                var ul = $('.cl-vnavigation');
                ul.slideToggle(300, 'swing', function() {
                });
            };
            vm.open = function (menuitem) {
                currentInstance.getInstancePromise().then(function () {
                    var instance = currentInstance.getInstance();
                    if (menuitem.path) {
                        //console.log("location url ", instance.slug + menuitem.path);
                        $location.url(instance.slug + menuitem.path);
                    }
                    angular.forEach(vm.menu, function (item) {
                        if (item.title !== menuitem.title) {
                            item.open = false;
                        }
                    });

                    //menuitem.open = (!menuitem.open && (menuitem.submenu.length > 0));
                    menuitem.open = (!menuitem.open && menuitem.submenu);

                });
            };
        }

        return directive;
    }
})();
