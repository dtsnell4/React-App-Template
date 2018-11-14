(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('globalMessageDetail', globalMessageDetail);

    /* @ngInject */

    function globalMessageDetail() {

        var directive = {
            scope: {
                ngModel: '='
              
            },
            //replace: true,
            require: 'ngModel',
            controller: globalMessageCtrl,
            controllerAs: 'vm',
            link: link,
            templateUrl: 'app/widgets/communication/global.message.detail/global.message.detail.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function globalMessageCtrl($scope, $location) {

            var vm = this;
          

            $scope.$watch(function () {
                return $scope.ngModel;
            }, function () {
               
                vm.globalmessage = $scope.ngModel;
                
            }, true);

               
            
            vm.getFileImage = function (filename) {
                //debugger;
                var ext = filename.substring(filename.lastIndexOf('.') + 1).toLowerCase();

                if (ext === 'pdf') {
                    return 'fa-file-pdf-o'
                }
                else if (ext === 'doc' || ext === 'dot' || ext === 'docx') {
                    return 'fa-file-word-o'
                }
                else if (ext === 'xls' || ext === 'xlt') {
                    return 'fa-file-excel-o '
                }
                else if (ext === 'png' || ext === 'jpg' || ext === 'gif' || ext === 'bmp' || ext === 'raw' || ext === 'psd') {
                    return 'fa-file-image-o'
                }
                else {
                    return 'fa-file-o'
                }
            }


        }


        function link(scope, element, attrs) {
            return;
        }

    }



})();