(function () {

    'use strict';
    angular.module('AppCentral.core')
        .provider('menu', menuProvider);
    /* @ngInject */
    function menuProvider() {
        var menu = [];

        function setRootMenu(object) {

            var translations = [];
            var injector = angular.injector(['ng', 'pascalprecht.translate']),
            translate = injector.get('$translate'),
            q = injector.get('$q');

            for (var index = 0; index < object.length; index++) {
                var element = object[index];
                translations.push(translate(element.title));
            }

            translate("ENDDATE").then(function (data) {
                debugger
            });

            q.all(translations).then(function (data) {
                debugger
            });

            menu = object;
        }

        function getMenu() {
            return menu;
        }
        return {
            menuItem: function (title) {
                angular.forEach(menu, function (value, index) {
                    if (value.title === title) {
                        return value;
                    }

                });
            },

            pushSubMenu: function (title, object) {

                angular.forEach(menu, function (value, index) {

                    if (value.title === title) {
                        value.submenu.push(object);
                    }
                });
            },
            setRootMenu: setRootMenu,
            $get: getMenu
        };
    }
})();