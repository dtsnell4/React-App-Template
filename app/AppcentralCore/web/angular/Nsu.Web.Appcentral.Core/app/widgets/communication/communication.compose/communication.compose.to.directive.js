(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('communicationComposeTo', CommunicationTo);

    /* @ngInject */
    function CommunicationTo() {

        var directive = {
            //scope: {
            //    ngModel: '=', 
            //    config: '=',
            //    item: '='
            //},
            //replace: true,
            //require: 'ngModel',
            controller: CommunicationToCtrl,
            controllerAs: 'composeTo',
            link: link,
            templateUrl: 'app/widgets/communication/communication.compose/communication.compose.to.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function CommunicationToCtrl($scope, paginationConfig, $timeout) {

            var vm = this;


        }

        function link(scope, element, attrs) {
            return;
        }

    }



})();