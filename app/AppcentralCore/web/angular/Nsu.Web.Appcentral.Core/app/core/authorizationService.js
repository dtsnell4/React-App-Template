(function () {

    'use strict';

    angular
      .module('AppCentral.core')
      .factory('authorizationService', authorizationService);

    /*@ngInject*/
    function authorizationService(loginProvider, currentUser, currentInstance, $q, $rootScope, $http, config) {
        var rolesInUser = [];
        var rolesInUserObject = [];
        var finish = false;
        
        $rootScope.$on('instance-loaded', getRoles);
        $rootScope.$on('token-refreshed', getRoles);

        var setRoles = function (rolesUser) {
            angular.forEach(rolesUser, function (item) {
                rolesInUser.push(item.name);
                rolesInUserObject.push(item);
            })
        }

        var getUserRolesInDetails = function () {
            return rolesInUserObject;
        }

        var roles = function (instanceId) {
            var deferred = $q.defer();
            if (instanceId === undefined) {
                if (currentInstance.getInstance() != null) 
                instanceId = currentInstance.getInstance().id;
            }
            if (instanceId !== undefined) {
                var rolesIn = currentUser.roles({ instanceId: instanceId }).$promise.then(function (data) {
                    rolesInUser = [];
                    setRoles(data);
                    deferred.resolve(rolesInUser);
                    $rootScope.$broadcast('roles-loaded');
                    deferred.resolve(rolesInUser);
                });
            }
            return deferred.promise;
        }

        var getRoles = function (instanceId) {
            var deferred = $q.defer();
            if (rolesInUser.length > 0) {
                deferred.resolve(rolesInUser);
            }else{
                roles(instanceId).then(function (data) {
                    deferred.resolve(data);
                })
            }
            
            return deferred.promise;
        }

        var authorize = function (loginRequired, requiredPermissions, permissionCheckType, instanceId, rolesInUser) {
            var vm = this;
            vm.success = false;
            var result = "authorized",
                        user = loginProvider.getUser(),
                        loweredPermissions = [],
                        hasPermission = true,
                        permission, i;

                permissionCheckType = permissionCheckType || "atLeastOne";

                if (loginRequired === true && user === undefined) {
                    result = "loginRequired";
                } else if ((loginRequired === true && user != undefined) && (requiredPermissions === undefined || requiredPermissions.length === 0)) {
                    // Login is required but no specific permissions are specified.
                    result = "authorized";
                } else if (requiredPermissions) {
                    loweredPermissions = [];
                    angular.forEach(rolesInUser, function (role) {
                        loweredPermissions.push(role.toLowerCase());
                    });

                    for (var i = 0; i < requiredPermissions.length; i += 1) {
                        permission = requiredPermissions[i].toLowerCase();

                        if (permissionCheckType === "combinationRequired") {
                            //console.log(loweredPermissions, permission);
                            hasPermission = hasPermission && loweredPermissions.indexOf(permission) > -1;
                            // if all the permissions are required and hasPermission is false there is no point carrying on
                            if (hasPermission === false) {
                                break;
                            }
                        } else if (permissionCheckType === "atLeastOne") {
                            //console.log(loweredPermissions, permission);
                            hasPermission = loweredPermissions.indexOf(permission) > -1;
                            // if we only need one of the permissions and we have it there is no point carrying on
                            if (hasPermission) {
                                break;
                            }
                        }
                    }
                    result = hasPermission ? "authorized" : "notAuthorized";
                }
            return result;
        };

        return {
            authorize: authorize,
            setRoles: setRoles,
            roles: roles,
            getRoles: getRoles,
            getUserRolesInDetails: getUserRolesInDetails
        };
    }
})();