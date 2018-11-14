(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('pageSizeFilter', pageSizeFilter);



    /* @ngInject */
    function pageSizeFilter() {
        var directive = {
            scope: {
                config: '=',
                pageSizing: '=',
                pageSize: '=',
                page: '='

            },
            controller: PageSizeCtrl,
            controllerAs: 'pagesize',
            link: link,
            templateUrl: 'app/widgets/paging/page.size.filter.tpl.html',
            restrict: 'A'
        };
        return directive;



        /* @ngInject */

        function PageSizeCtrl($scope) {

            var vm = this;

            vm.config = $scope.config;
            vm.currentPage = 1;

            vm.options = [
         
           {
               name: "10",
               value: 10
           },
           {
               name: "20",
               value: 20
           },
           {
               name: "50",
               value: 50
           },
           {
               name: "100",
               value: 100
           }];


            $scope.$watch("pageSize", function (val1) {
                vm.pageSize = $scope.pageSize;
            });


            $scope.$watch("page", function (val2) {
                vm.page = $scope.page;
            })

            vm.pageSizing = function () {
                vm.config(vm.currentPage, vm.pageSize);
            }
        }

        function link(scope, element, attrs, ngModel) {
            if (!ngModel) {
                return;
            }
        }
    }


})();