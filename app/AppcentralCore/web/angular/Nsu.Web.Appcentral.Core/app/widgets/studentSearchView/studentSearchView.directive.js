(function () {
    'use strict';
    angular
       .module('AppCentral.core.widgets')
        .directive('studentSearchView', function studentSearchView() {
            var directive = {
                scope: {
                    ngModel: '=',
                    config: '='
                },
                controller: studentSearchController,
                controllerAs: 'vm',
                templateUrl: 'app/widgets/studentSearchView.tpl.html',
                restrict: 'E'
            };

            return directive;
        });
    /* @ngInject */
    function studentSearchController($scope, config) {
        var vm = this;

        vm.config = $scope.config;

        vm.terms = vm.config.terms;

        //vm.imgUrl = config.appCentralApi + "users/image?nsuId=";
        //vm.students = $scope.ngModel;
        //vm.selectedclass = $scope.selectedclass;

    }


})();
