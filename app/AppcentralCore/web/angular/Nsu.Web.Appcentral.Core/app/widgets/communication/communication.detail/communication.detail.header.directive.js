(function () {
    'use strict';
      
    angular
        .module('AppCentral.core.widgets')
        .directive('communicationDetailHeader', detailHeader);

    /* @ngInject */

    function detailHeader() {

        var directive = {
            //scope: {
            //    ngModel: '=',
            //    config: '=',
            //    item: '='
            //},
            //replace: true,
            //require: 'ngModel',
            controller: detailHeaderCtrl,
            controllerAs: 'detailHeader',
            link: link,
            templateUrl: 'app/widgets/communication/communication.detail/communication.detail.header.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function detailHeaderCtrl($scope, $location, currentInstance) {

            var vm = this;

            var slug = currentInstance.getInstance().slug;

            //console.log(slug);

            vm.inbox = function () {

                $location.path("/" + slug + "/inbox");
            }

            vm.reply = function (messageId) {
                $location.path("/" + slug + "/compose/" + messageId);
            }


        }


        function link(scope, element, attrs) {
            return;
        }

    }



})();