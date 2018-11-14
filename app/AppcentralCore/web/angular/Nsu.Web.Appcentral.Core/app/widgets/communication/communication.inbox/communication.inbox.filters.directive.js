(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('communicationInboxFilters', inboxFilters);  

    /* @ngInject */
    function inboxFilters() {

        var directive = {
            //scope: {
            //    ngModel: '=',
            //    config: '=',
            //    item: '='
            //},
            //replace: true,
            //require: 'ngModel',
            controller: inboxFiltersCtrl,
            controllerAs: 'inboxFilters',
            link: link,
            templateUrl: 'app/widgets/communication/communication.inbox/communication.inbox.filters.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function inboxFiltersCtrl($scope, currentInstance, $route, $location) {

            var vm = this;

        }

        function link(scope, element, attrs) {
            return;
        }

    }



})();