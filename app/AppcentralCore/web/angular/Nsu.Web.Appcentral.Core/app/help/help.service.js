(function () {

    'use strict';

    angular
      .module('AppCentral.core.help')
      .factory('helpService', helpService);

    /*@ngInject*/
    function helpService(currentInstance, $q, $rootScope, $http, config, HelpResource) {

        var currentInstanceId = null;
        var hasToDrawHelpMenu = false;
        var factory = {
            getHelp: getHelp,
            addHelpMenuTo: addHelpMenuTo,
            drawHelpMenu: drawHelpMenu
        };

        return factory;

        function getHelp (instanceId) {
            
            var helpData = HelpResource.get({ instanceId: instanceId });

            return helpData
        };

        function drawHelpMenu(rootMenu) {
            var hasHelpMenu = false;
            var helpMenuIndex = -1;

            if (rootMenu != null && rootMenu != undefined) {
                angular.forEach(rootMenu, function (item) {
                    helpMenuIndex++;
                    if (item.title == 'Help') {
                        hasHelpMenu = true;
                    }
                });

                if (hasToDrawHelpMenu && !hasHelpMenu) {
                    if (!hasHelpMenu)
                        rootMenu.push({
                            'title': 'Help',
                            'open': false,
                            'icon': 'fa-question-circle',
                            'path': '/help',
                            //'roles': [{ 'name': 'appcentral_help' }],
                            // 'submenu': []
                        });
                } else if (!hasToDrawHelpMenu && hasHelpMenu) {
                    rootMenu.splice(helpMenuIndex, 1);
                }
            }
        };

        function addHelpMenuTo(rootMenu) {
            var actualInstance = currentInstance.getInstance();
            if (actualInstance != null && actualInstance != undefined) {

                if (currentInstanceId == null || currentInstanceId == undefined || currentInstanceId != actualInstance.id) {
                    currentInstanceId = actualInstance.id
                    HelpResource.get({ instanceId: actualInstance.id }, function (data) {
                        if (data.id != null && data.id != undefined && data.id != 0) {
                            hasToDrawHelpMenu = true;
                        } else {
                            hasToDrawHelpMenu = false;
                        }
                        drawHelpMenu(rootMenu);
                    });
                } else {
                    drawHelpMenu(rootMenu);
                }
            }
        };
    }

})();