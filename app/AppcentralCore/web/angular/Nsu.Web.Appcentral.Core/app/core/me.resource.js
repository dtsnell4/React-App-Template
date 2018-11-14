(function() {

    angular
        .module('AppCentral.core')
        .factory('currentUser', user);

    function user($resource, config, currentInstance) {
        return $resource(config.appCentralApi + 'me', { id: '@id' }, {
            update: { method: 'PUT' },
            roles: {
                method: 'GET',
                url: config.appCentralApi + 'me/instances/:instanceId/roles',
                isArray: true
            },
            instances: {
                method: 'GET',
                url: config.appCentralApi + 'me/instances',
                isArray: true
            },
            hasRole: {
                method: 'GET',
                url: config.appCentralApi + 'user/:userId/groups',
                isArray: true
            }
        });
    }

    
})();
