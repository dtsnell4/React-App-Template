(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('nsuPane', nsuPane);

    /* @ngInject */
    function nsuPane($filter) {

        var directive = {
            scope: {
                ngModel: '=',
                config: '=',
                item: '='
            },
            replace: true,
            require: 'ngModel',
            controller: nsuPaneCtrl,
            controllerAs: 'pane',
            link: link,
            templateUrl: 'app/widgets/pane/nsupane.tpl.html',
            restrict: 'A'
        };
        return directive;
        
        /* @ngInject */
        function nsuPaneCtrl($scope, paginationConfig, $timeout) {
            var vm = this;
            vm.config = $scope.config;
            vm.totalItmes = 0;
            vm.originalItems = 0;
            vm.page = 1;
            vm.itemsPerPage = paginationConfig.itemsPerPage;
     
            vm.pagedCollection = [];

            vm.filter = function(items, search) {
                return items.filter(function(item) {
                    if ( (item.name !== undefined ? item.name.toLowerCase().indexOf(search.toLowerCase()) > -1 : null) ||
                        (item.description !== undefined ? item.description.toLowerCase().indexOf(search.toLowerCase()) > -1 : null) ) {
                        return true;
                    }
                    return false;
                });
            };


            if (vm.config.filter) {
                vm.filter = vm.config.filter;
            }


            vm.search = {
                name: ''
            };


            $scope.$watch(function () {
                return vm.search.name;
            }, function () {
                vm.page = 1;
                vm.refresh();
            });


            $scope.$watch(function () {
                return $scope.config.globalactive;
            }, function () {
                vm.page = 1;
            });

            $scope.$watch(function () {
                return $scope.config.title;
            }, function () {
                vm.page = 1;
                vm.refresh(0);
            });

            $scope.$watch(function () {
                return $scope.ngModel;
            }, function () {
                vm.refresh(0);
            }, true);


            vm.refresh = function () {

                
                if (vm.config.sort === undefined) {
                    vm.config.sort = [];
                }
              
                vm.pagedCollection = $filter('orderBy')($scope.ngModel,
                    vm.config.sort.length === 0 ? ['name'] : vm.config.sort, false);

                var item;
                var itemIndex = 0;


                for (var i = 0; i < vm.pagedCollection.length; i++) {
                    if (vm.pagedCollection[i].highlight === true) {
                        item = vm.pagedCollection[i];
                        itemIndex = i;
                        break;          
                    }
                }
                

                //reset search and paging if we need to highlight an item
                if (item) {

                    vm.search.name = '';
                    vm.page = Math.ceil((itemIndex + 1) / parseInt(vm.itemsPerPage));
                    if (vm.page === 0) {
                        vm.page = 1;
                    }
                    //console.log("vm.page2", vm.page);


                    $timeout(function() {
                        item.highlight = false;
                    }, 3000);
                } else {

                    var q1 = vm.config.emptyFilter && vm.config.emptyFilter == true; 
                    var q2 = angular.isDefined(vm.search.name) && vm.search.name === "";
                    if (q1 && q2) {

                    }
                    else{
                        vm.pagedCollection = vm.filter(vm.pagedCollection, vm.search.name);

                    }

                
                }

                vm.totalItmes = vm.pagedCollection.length;

                if (vm.pagedCollection.length <= parseInt(vm.itemsPerPage)) {
                    vm.page = 1;
                }
                var begin = ((vm.page - 1) * parseInt(vm.itemsPerPage));
                var end = begin + parseInt(vm.itemsPerPage);
                vm.pagedCollection = vm.pagedCollection.slice(begin, end);
                vm.firstItem = begin + 1; // === 0 ? 1 : begin;

                if (vm.totalItmes < parseInt(vm.itemsPerPage)) {
                    vm.lastItem = vm.totalItmes;
                }
                else {
                    vm.lastItem = end === 0 ? 1 : end;
                }

           
            };


            vm.call = function(action, item) {
                action.action(item);
            };

            vm.selectItem = function(item) {
                if (vm.config.selectable) {
                    vm.config.selectedItem = item;
                }
            };
        }
        function link(scope, element, attrs, ngModel) {
            if (!ngModel) {
                return;
            }
        }
    }
})();