(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('daysShowed', function daysShowed() {
            var directive = {
                scope: {
                    ngModel: '=',
                    schedules: '=',
                    labels: '='
                },
                controller: DaysCoursesController,
                controllerAs: 'vm',
                templateUrl: 'app/widgets/courseWizardDays/days.tpl.html',
                restrict: 'E',

            };
            return directive;
        })


    /* @ngInject */
    function DaysCoursesController($scope, $rootScope) {
        var vm = this;
        vm.daysSelected = ['M', 'T', 'W', 'R', 'F', 'S', 'U'];
        vm.partOfDaySelected = ['M', 'A', 'E'];
        vm.daysFound = [];
        vm.partOfDaysFound = [];

        vm.pagedCollection = $scope.ngModel;
        vm.labels = $scope.labels;

        $scope.$watch(function () {
            return $scope.ngModel;
        }, function () {
            vm.pagedCollection = $scope.ngModel;
        }, true);


        vm.initialize = function () {
            vm.daysSelected = ['M', 'T', 'W', 'R', 'F', 'S', 'U'];
            vm.partOfDaySelected = ['M', 'A', 'E'];
        }

        vm.orderDays = function (list) {
            var aux = [];
            if (list.indexOf('M') != -1) {
                aux.push('M')
            }
            if (list.indexOf('T') != -1) {
                aux.push('T')
            }
            if (list.indexOf('W') != -1) {
                aux.push('W')
            }
            if (list.indexOf('R') != -1) {
                aux.push('R')
            }
            if (list.indexOf('F') != -1) {
                aux.push('F')
            }
            if (list.indexOf('S') != -1) {
                aux.push('S')
            }
            if (list.indexOf('U') != -1) {
                aux.push('U')
            }
            return aux;
        }

        var daysSelectedRegister = $rootScope.$on('__daysSelected', function (event, args) {
         
            if (args && args.length > 0) {
                var nonMatchingDays = vm.daysSelected.filter(function (d) {
                    return args.indexOf(d) === -1;
                });
                _.each(nonMatchingDays, function (el) {
                    vm.SelectDay(el);
                });
            }
        });

        // clean up listener when directive's scope is destroyed
        $rootScope.$on('$destroy', daysSelectedRegister );

        vm.SelectDay = function (day) {
            if (vm.daysSelected.indexOf(day) == -1) {
                vm.daysSelected.push(day);
                // debugger;
                vm.daysSelected = vm.orderDays(vm.daysSelected);
            } else {
                vm.daysSelected.splice(vm.daysSelected.indexOf(day), 1);
            }
            $rootScope.$broadcast('daysSelected', vm.daysSelected);
        }

        var partDaysSelectedRegister = $rootScope.$on('__partDaysSelected', function (event, args) {

            if (args && args.length > 0) {
                var nonMatchingPartDays = vm.partOfDaySelected.filter(function (d) {
                    return args.indexOf(d) === -1;
                });
                _.each(nonMatchingPartDays, function (el) {
                    vm.selectPartOfDay(el);
                });
            }
        });

        // clean up listener when directive's scope is destroyed
        $rootScope.$on('$destroy', partDaysSelectedRegister);

        vm.selectPartOfDay = function (partOfDay) {
            if (vm.partOfDaySelected.indexOf(partOfDay) == -1) {
                vm.partOfDaySelected.push(partOfDay);
            } else {
                vm.partOfDaySelected.splice(vm.partOfDaySelected.indexOf(partOfDay), 1);
            }
            $rootScope.$broadcast('partOfDaysSelected', vm.partOfDaySelected);
        }

    }

})();