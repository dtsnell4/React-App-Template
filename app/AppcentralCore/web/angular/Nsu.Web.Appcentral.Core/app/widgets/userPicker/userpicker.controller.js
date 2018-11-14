(function () {
    angular
        .module('userPicker')
        .controller('UserPickerController', controller);

    /*@ngInject*/
    function controller($scope, $modalInstance, $filter, $http, data) {
        var vm = this;
        vm.data = angular.copy(data);
        vm.page = 1;
        vm.itemsPerPage = 10;
        vm.userId = null;

        vm.selectOptions = [
                { label: 'AppCentral', value: 2 }
        ];

        vm.buttonText = data.buttonText;
        vm.title = data.title;

        vm.searchParams = vm.data.search;

        if (vm.data.items == null) {
            vm.selectedUsers = [];
        }
        else
            vm.selectedUsers = vm.data.items;

        angular.forEach(vm.selectedUsers, function (user) {
            user.checked = true;
        });

        vm.search = function (searchvalue, type) {
            vm.userId = null;
            if (vm.setbannersearch == null) {
                vm.setbannersearch = vm.selectOptions[0];
            }
            if (type == null || type == true) {
                vm.searchParams.type = vm.setbannersearch.label;
                vm.searchParams.search = searchvalue;
            } else {
                vm.searchParams.value = searchvalue;
                vm.selectedUsers = [];
            }

            vm.promise = $http({
                url: vm.data.url,
                method: 'GET',
                params: vm.searchParams
            }).success(function (things) {
                vm.usersload = true;
                angular.forEach(things, function (item) {
                    var idx = -1;
                    angular.forEach(vm.selectedUsers, function (user, index) {
                        if (user.userId === item.userId) {
                            idx = index;
                        }
                    });
                    item.checked = idx > -1;
                });

                vm.users = things;
                vm.refresh();
            }).
                error(function () {
                    vm.usersload = true;
                    vm.users = [];
                    vm.refresh();
                });
        };
        vm.refresh = function () {
            vm.users = $filter('orderBy')(vm.users, 'lastName', false);
            vm.pagedusers = vm.users;
            vm.totalItmes = vm.pagedusers.length;

            if (vm.pagedusers.length <= vm.itemsPerPage) {
                vm.page = 1;
            }

            var begin = ((vm.page - 1) * vm.itemsPerPage);
            var end = (begin + vm.itemsPerPage) > vm.totalItmes ?
                vm.totalItmes : (begin + vm.itemsPerPage);
            vm.pagedusers = vm.pagedusers.slice(begin, end);
            vm.firstItem = begin + 1;
            vm.lastItem = end;
        };

        vm.toggleUser = function (item) {
            var idx = -1;
            angular.forEach(vm.selectedUsers, function (user, index) {
                if (user.userId === item.userId) {
                    idx = index;
                }
            });
            if (idx > -1) {
                vm.selectedUsers.splice(idx, 1);
            } else {
                vm.selectedUsers.push(item);
            }
        }

        vm.ImpersonateUser = function (user) {
            vm.selectedUsers = user;
        }


        vm.ok = function () {
            $modalInstance.close(vm.selectedUsers);
        };

        vm.cancel = function () {
            //console.log("cancel");
            $modalInstance.dismiss('cancel');
        };
    };


})();
