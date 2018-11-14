(function () {

    'use strict';
    angular.module('AppCentral.core.formwidgets', ['daterangepicker'])
        .directive('appcentralDatetimeRangepicker', function () {
            return {
                restrict: 'E',
                replace: true,
                priority: 1,
                require: 'ngModel',
                templateUrl: 'app/widgets/dateTimePicker/dateTimePickerRange.tpl.html',
                controller: function ($scope) {
                }
            };
        })
        .directive('appcentralDatetimePicker', function () {
            return {
                restrict: 'E',
                replace: true,
                priority: 1,
                require: 'ngModel',
                scope: { id: '@id', ngModel: '=', inputformat: '=', minview: '=', startview: '=', isdisabled: '=', cssclass: '=' },
                templateUrl: 'app/widgets/dateTimePicker/dateTimePicker.tpl.html',
                controllerAs: 'vm',
                /* @ngInject */
                controller: function ($scope) {
                    var vm = this;
                    vm.inputformat = $scope.inputformat;
                    vm.minview = $scope.minview;
                    vm.startview = $scope.minview;
                    vm.isdisabled = $scope.isdisabled;
                    vm.cssclass = $scope.cssclass;
                    vm.id = $scope.id;

                    $scope.$watch("isdisabled", function (val2) {
                        vm.isdisabled = $scope.isdisabled;
                        if ($scope.isdisabled == true)
                            vm.toggle = '';
                        else
                            vm.toggle = 'dropdown';
                    });

                }
            };
        });
})();

