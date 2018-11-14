(function () {
    'use strict';
      
    angular
        .module('AppCentral.core.widgets')
        .directive('communicationDetailMessage', detailMessage);

    /* @ngInject */
    function detailMessage() {

        var directive = {
            //scope: {
            //    ngModel: '=',
            //    config: '=',
            //    item: '='
            //},
            //replace: true,
            //require: 'ngModel',
            controller: detailMessageCtrl,
            controllerAs: 'detailMessage',
            link: link,
            templateUrl: 'app/widgets/communication/communication.detail/communication.detail.message.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function detailMessageCtrl($scope) {

            var vm = this;

            //vm.test = vm.getMessage(1);

            //console.log("detail test");

            //console.log(vm.test);

        }

        function link(scope, element, attrs) {
            return;
        }

    }



})();