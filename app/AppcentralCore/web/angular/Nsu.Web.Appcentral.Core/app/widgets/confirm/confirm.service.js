(function () {
    angular
        .module('appcentralConfirm')
        .factory('$confirm', confirm);
    /*@ngInject*/
    function confirm($modal, $confirmModalDefaults) {
        return function (data, settings) {
            settings = angular.extend($confirmModalDefaults, (settings || {}));
            data = data || {};
    
            if ('templateUrl' in settings && 'template' in settings) {
                delete settings.template;
            }
    
            settings.resolve = {data: function() { return data; }};

            return $modal.open(settings).result;
        };
    }
})();
