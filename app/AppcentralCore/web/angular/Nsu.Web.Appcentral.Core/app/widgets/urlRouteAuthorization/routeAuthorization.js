(function () {
    'use strict';

    angular
       .module('AppCentral.core.widgets')
       .directive('access', function (authorizationService, currentInstance, currentUser) {
           return {
               restrict: 'A',
               link: function (scope, element, attrs) {
                   var makeVisible = function () {
                       element.removeClass('hidden');
                   }
                   var makeHidden = function () {
                       element.addClass('hidden');
                   },
                   determineVisibility = function (resetFirst) {
                       var result;
                       if (resetFirst) {
                           makeVisible();
                       }
                       var instanceId = currentInstance.getInstance().id;
                       var rolesIn = authorizationService.getRoles(instanceId).then(function (data) {
                           result = authorizationService.authorize(true, requiredPermissions, attrs.accessPermissionType, instanceId, data);
                           //debugger;
                           if (result === "authorized") {
                               makeVisible();
                           } else {
                               makeHidden();
                           }
                       });

                   },
                   requiredPermissions = attrs.access.split(',');

                   if (requiredPermissions.length > 0) {
                       determineVisibility(true);
                   }
               }
           }

       });
})();