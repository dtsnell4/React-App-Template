/**
 * @desc Please provide useful information regarding the directive with a proper example
 * @example <div upload url="urlToUpload"></div>
 * vm.urlToUpload = 'files/' + currentInstance.getInstance().id;
 */

(function () {
    'use strict';
    angular
        .module('AppCentral.core.widgets')
        .directive('nsuProfilePicture', picture);
    /*@ngInject*/
    function picture(config, $http, loginProvider, $rootScope) {
        var directive = {
            link: uploadLink,
            restrict: 'A'
        };
        var fr = new FileReader();
        return directive;
        /*@ngInject*/
        function uploadLink($scope, element, attrs) {
            //var url = config.api; 
            $rootScope.$on('user:loaded', function (event, data) {
                if (data.isLoggedIn) {
                    reload(element, $scope);
                }
            });
            if (loginProvider.isLoggedIn()) {
                reload(element, $scope);
            }
        }
        function reload(element, $scope) {
            var url = config.appCentralApi + 'me/image';
            $http.get(url, { responseType: "blob" }).
                    success(function (data, status, headers) {
                        fr.onload = function () {
                            element[0].src = fr.result;
                            $scope.$apply();
                        };
                        fr.readAsDataURL(data);
                    }).
                    error(function (data, status, headers, config) {
                    });
        }

    }



})();
