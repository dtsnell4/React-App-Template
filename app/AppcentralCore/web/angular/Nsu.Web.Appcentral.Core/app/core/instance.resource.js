(function () {

    angular
      .module('AppCentral.core')
      .factory('Instances', instances);

    function instances($resource, config) {
        return $resource(config.appCentralApi + 'instances/:id'
            );
    }

})();