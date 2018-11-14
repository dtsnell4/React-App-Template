(function () {

    angular
    .module('AppCentral.core')
    .factory('currentUserService', CurrentUserService);

    /*@ngInject*/
    function CurrentUserService(currentUser, $q, currentInstance, loginProvider) {

        var factory = {
            getInstances: getInstances,
        };
        return factory;

        function getInstances(roles) {

            instances = [];
            user = loginProvider.getUser();

            instanceRole = currentUser.instances({ userId: user.user_id, roles: roles });
            instancesPromise = $q.defer();

            instanceRole.$promise.then(function (data) {
                angular.forEach(data, function (item) {
                    angular.forEach(item.roleName, function (role) {

                        var idx = myIndexOf(item);
                        if (idx == -1) {
                            instances.push(item);
                        }
                    });
                });
                instancesPromise.resolve(data);
            });
            
            return instancesPromise.promise;
        }

        function myIndexOf(o) {
            for (var i = 0; i < instances.length; i++)
                if (instances[i].instanceName == o.instanceName)
                    return i;
            return -1;
        }
    }

})();
