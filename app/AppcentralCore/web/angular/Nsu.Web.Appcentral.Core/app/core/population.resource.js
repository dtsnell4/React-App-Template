(function () {
    'use strict';

    angular
      .module('AppCentral.core')
      .factory('Populations', populations);

    /*@ngInject*/
    function populations($resource, config, currentInstance) {
        return $resource(config.appCentralApi + 'apps/:appId/instances/:instanceId/populations',
            { appId: currentInstance.getInstance().instanceOwnerId, instanceId: currentInstance.getInstance().id }, {
            update: { method: 'PUT' },
            cache: true
        });


    }

})();