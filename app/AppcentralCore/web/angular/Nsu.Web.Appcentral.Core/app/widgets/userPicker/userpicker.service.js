(function () {
    angular
        .module('userPicker')
        .factory('$userPicker', userPicker);
    /*@ngInject*/
    function userPicker($modal, $userModalDefaults) {
        return function (data, settings) {
            settings = angular.extend($userModalDefaults, (settings || {}));
            data = data || {};
    
            if ('templateUrl' in settings && 'template' in settings) {
                delete settings.template;
            }
    
            settings.resolve = {data: function() { return data; }};

            return $modal.open(settings).result;
        };
    }
})();
