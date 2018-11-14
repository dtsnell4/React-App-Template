(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('communicationComposeCc', CommunicationCC);

    /* @ngInject */
    function CommunicationCC() {

        var directive = {
            //scope: {
            //    ngModel: '=',
            //    config: '=', 
            //    item: '='
            //},
            //replace: true,
            //require: 'ngModel',
            controller: CommunicationCCCtrl,
            controllerAs: 'composeCC',
            link: link,
            templateUrl: 'app/widgets/communication/communication.compose/communication.compose.cc.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function CommunicationCCCtrl($scope) {

            var vm = this;


        }

        function link(scope, element, attrs) {
            return;
        }

    }



})();