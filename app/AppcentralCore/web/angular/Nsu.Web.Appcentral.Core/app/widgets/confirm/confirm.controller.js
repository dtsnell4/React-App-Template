(function () {
    angular
        .module('appcentralConfirm')
        .controller('ConfirmModalController', controller);

    /*@ngInject*/
            function controller($scope, $modalInstance, data) {
                $scope.data = angular.copy(data);

                $scope.ok = function() {
                    $modalInstance.close();
                };

                $scope.cancel = function() {
                    $modalInstance.dismiss('cancel');
                };
            };


})();
