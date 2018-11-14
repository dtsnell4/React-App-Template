(function () {

    angular
      .module('AppCentral.core.help')
      .factory('HelpResource', HelpResource);

    /* @ngInject */
    function HelpResource($resource, config) {
        return $resource(config.appCentralApi + 'instances/:instanceId/help', { instanceId: '@instanceId' }, {
            update: {
                method: 'PUT'
            },
            save: {
                method: 'POST'
            },
            summary: {
                method: 'GET',
                url: config.appCentralApi + 'instances/help',
                isArray: true
            },
            cache: true
        });
    }
})();