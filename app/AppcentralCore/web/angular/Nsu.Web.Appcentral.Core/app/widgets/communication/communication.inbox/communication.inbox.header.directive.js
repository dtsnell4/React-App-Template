(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('communicationInboxHeader', inboxHeader);  

    /* @ngInject */
    function inboxHeader() {

        var directive = {
            //scope: {
            //    ngModel: '=',
            //    config: '=',
            //    item: '='
            //},
            //replace: true,
            //require: 'ngModel',
            controller: inboxHeaderCtrl,
            controllerAs: 'inboxHeader',
            link: link,
            templateUrl: 'app/widgets/communication/communication.inbox/communication.inbox.header.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function inboxHeaderCtrl($scope) {

            var vm = this;

            


        }

        function link(scope, element, attrs) {
            return;

        }

    }



})();


