(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('paging', Paging);



    /* @ngInject */
    function Paging() {

        var directive = {
            scope: {
                config: '=',
                total: '=',
                pageSize: '=',
                currentPage: '='
            },
            controller: PagingCtrl,
            controllerAs: 'paging',
            link: link,
            templateUrl: 'app/widgets/paging/paging.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function PagingCtrl($scope) {


            var vm = this;

            vm.config = $scope.config;

            vm.currentPage = 1;

            $scope.$watch("total", function (val1) {
                vm.total = $scope.total;
            })

            $scope.$watch("pageSize", function (val2) {
                vm.pageSize = $scope.pageSize;
            })

            $scope.$watch("currentPage", function (val3) {
                vm.currentPage = $scope.currentPage;
            })


            /* Pagination */

            vm.range = function () {

                var rangeSize = vm.pageCount();
                var ret = [];


                for (var i = 1; i <= rangeSize; i++) {
                    ret.push(i);
                }
                return ret;
            }


            vm.prevPageDisabled = function () {

                return vm.currentPage === 1 ? "disabled" : "";
            }

            vm.nextPageDisabled = function () {

                return vm.currentPage === vm.pageCount() ? "disabled" : "";
            }

            vm.prevPage = function () {
                if (vm.currentPage > 1) {
                    vm.currentPage--;
                    vm.config(vm.currentPage);
                }

            }

            vm.nextPage = function () {

                if (vm.currentPage < vm.pageCount()) {
                    vm.currentPage++;
                    vm.config(vm.currentPage);
                }

            }

            vm.pageCount = function () {
                return Math.ceil(vm.total / vm.pageSize);

            }

            vm.setPage = function (n) {

                if (n >= 1 && n <= vm.pageCount()) {
                    vm.currentPage = n;
                    vm.config(vm.currentPage);

                }

            }
            /* //////// */




        }


        function link(scope, element, attrs, ngModel) {
            if (!ngModel) {
                return;
            }
        }


    }

})();