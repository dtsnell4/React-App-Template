
angular.module('AppCentral.core.filters')
    .filter('removeUnderscore', function() {
        return function(str) {
            str = str.replace(/_*/g, function(txt) {
                return txt.charAt(0).replace('_', ' ');
            });
            return str.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        };
    });
angular.module('AppCentral.core.filters')
    .filter('addUnderscore', function() {
        return function(str) {
            str.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            return str.replace(' ', '_');
        };
    });