(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('communicationComposeSubject', CommunicationSubject);

    /* @ngInject */
    function CommunicationSubject() {

        var directive = {
            //scope: {
            //    ngModel: '=',
            //    config: '=',
            //    item: '=' 
            //},
            //replace: true,
            //require: 'ngModel',
            controller: CommunicationSubjectCtrl,
            controllerAs: 'composeSubject',
            link: link,
            templateUrl: 'app/widgets/communication/communication.compose/communication.compose.subject.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function CommunicationSubjectCtrl($scope, paginationConfig, $timeout) {

            var vm = this;


        }

        function link(scope, element, attrs) {
            return;
        }

    }



})();