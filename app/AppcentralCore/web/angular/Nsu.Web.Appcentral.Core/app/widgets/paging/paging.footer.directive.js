(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('pagingFooter', PagingFooter);



    /* @ngInject */
    function PagingFooter() {
        var directive = {
            scope: {
                config: '=',
                total: '=',
                pageSize: '=',
                currentPage: '=',
                first: '=',
                last: '='
            },
            controller: PagingFooterCtrl,
            controllerAs: 'pagefooter',
            link: link,
            templateUrl: 'app/widgets/paging/paging.footer.tpl.html',
            restrict: 'A'
        };
        return directive;



        /* @ngInject */

        function PagingFooterCtrl($scope) {

            var vm = this;
            vm.config = $scope.config;
            vm.currentPage = 1;
            $scope.$watch("total", function (val1) {
                vm.total = $scope.total;
            });
            $scope.$watch("first", function (val1) {
                vm.first = $scope.first;
            });
            $scope.$watch("last", function (val1) {
                vm.last = $scope.last;
            });

            $scope.$watch("pageSize", function (val2) {
                vm.pageSize = $scope.pageSize;
            });

            $scope.$watch("currentPage", function (val3) {
                vm.currentPage = $scope.currentPage;
            });

            /* Pagination */
            vm.range = function () {
                var rangeSize = vm.pageCount();
                var ret = [];
                if (rangeSize < 10) {
                    for (var i = 1; i <= rangeSize; i++) {
                        ret.push(i);
                    }
                }
                else {
                    if (vm.currentPage < 5) {
                        for (var i = 1; i <= 5; i++) {
                            ret.push(i);
                        }
                        //ret.push('...');
                    }
                    else if (vm.currentPage > rangeSize - 5) {
                        for (var i = rangeSize - 5; i < rangeSize; i++) {
                            ret.push(i);
                        }
                    }
                    else {
                        for (var i = vm.currentPage - 2; i < vm.currentPage + 3; i++) {
                            ret.push(i);
                        }
                    }
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
                    vm.config(vm.currentPage, vm.pageSize);
                }
            }

            vm.nextPage = function () {
                if (vm.currentPage < vm.pageCount()) {
                    vm.currentPage++;
                    vm.config(vm.currentPage, vm.pageSize);
                }
            }

            vm.pageCount = function () {
                return Math.ceil(vm.total / vm.pageSize);
            }

            vm.setPage = function (n) {

                if (n == '...')
                    n = vm.currentPage + 5;

                if (n >= 1 && n <= vm.pageCount()) {
                    vm.currentPage = n;
                    vm.config(vm.currentPage, vm.pageSize);

                }
            }
        }

        function link(scope, element, attrs, ngModel) {
            if (!ngModel) {
                return;
            }
        }
    }


})();