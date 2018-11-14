angular
     .module('AppCentral.core.widgets')
     .directive('nsuDatepicker', nsuDatepicker);

function nsuDatepicker() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function (scope, element, attrs) {

            $(element).daterangepicker(scope.$eval(attrs.nsuDatepicker));
        }
    }

}