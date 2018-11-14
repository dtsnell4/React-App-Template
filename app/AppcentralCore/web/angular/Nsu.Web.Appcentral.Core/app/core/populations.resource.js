(function () {
    'use strict';

    angular
      .module('AppCentral.core')
      .factory('Populations123', populations123);

    /*@ngInject*/
    function populations123($resource, config, currentInstance) {
        return $resource(config.appCentralApi + 'instances/:instanceId/populations/:id', { id: '@id', instanceId: currentInstance.getInstance().id }, {
            update: { method: 'PUT' },
            cache: true
        });

        
    }
    
})();