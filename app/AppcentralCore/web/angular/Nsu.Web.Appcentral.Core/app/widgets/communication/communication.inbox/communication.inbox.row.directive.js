(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('communicationInboxRow', inboxRow);

    /* @ngInject */  
    function inboxRow() {

        var directive = {
            //scope: {
            //    ngModel: '=',
            //    config: '=',
            //    item: '='
            //},
            //replace: true,
            //require: 'ngModel',
            controller: inboxRowCtrl,
            controllerAs: 'inboxRow',
            link: link,
            templateUrl: 'app/widgets/communication/communication.inbox/communication.inbox.row.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function inboxRowCtrl($scope, $location, currentInstance) {

            var vm = this;

            var slug = currentInstance.getInstance().slug;

            vm.detail = function (messageId, page) {
                $location.path("/"+ slug +"/detail/" + messageId + "/" + page);
            }



        }

        function link(scope, element, attrs) {
            return;
        }

    }



})();