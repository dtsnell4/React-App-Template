(function () {

    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .factory('sharedUploadProperties', sharedUploadProperties);


    function sharedUploadProperties() {
        var extensions = '.doc,.docx,.pdf';

        return {
            getProperty: function () {
                return extensions;
            },
            setProperty: function (value) {
                extensions = value;
            }
        };
    }

})();