angular
     .module('AppCentral.core.widgets')
     .directive('fullCalendar', fullCalendar);

function fullCalendar() {
    debugger;
    return {
       
        // Restrict it to be an attribute in this case
        require: 'ngModel',
        restrict: 'E',
        scope: {
           
            model: '=ngModel',
            opts: '=options',
            config: '=',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function (scope, element, attrs) {
                
                $(element).fullCalendar({
                    events: scope.model// put your options and callbacks here
                });
            }
        }

    }
}