(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('modelStateError', modelStateError);

    angular
        .module('AppCentral.core.widgets').run(loadTpl);

    /* @ngInject */
    function modelStateError() {
        var directive = {
            scope: {
                ngModel: '=',
                modelStateError: '='
            },
            replace: true,
            require: 'ngModel',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ctrl) {            
            scope.$watch('ngModel', function () {
                ctrl.$setValidity('modelStateError', true);
                ctrl.$setValidity('minlength', true);
                ctrl.$setValidity('maxlength', true);
                ctrl.$setValidity('required', true);
                ctrl.$setValidity('unique', true);

                ctrl.$validate();
                scope.errorMessage = '';
            });

            scope.$watch('modelStateError', function () {
                window.ctrl = ctrl;
                if (scope.modelStateError == null) {return;}
                var modelStateKey = attrs.name;
                if (scope.modelStateError[modelStateKey]) {
                    ctrl.$setValidity('modelStateError', false);
                    ctrl.$validate();
                    ctrl.$setDirty();
                    angular.forEach(scope.modelStateError[modelStateKey], function(error) {
                        if (error.indexOf('minimum length') >= 0) {
                            ctrl.$setValidity('minlength', false);
                        }
                        if (error.indexOf('maximum length') >= 0) {
                            ctrl.$setValidity('maxlength', false);
                        }
                        if (error.indexOf('field is required') >= 0) {
                            ctrl.$setValidity('required', false);
                        }
                        if (error.indexOf('unique') >= 0) {
                            ctrl.$setValidity('unique', false);
                        }
                    });
                } else {
                    ctrl.$setValidity('modelStateError', true);
                }
                
            });
        }
    }

    /* @ngInject */
    function loadTpl($templateCache, $http) {
        var errortpl = $templateCache.get('app/widgets/modelState/errors.tpl.html');
        if (!errortpl) {
           $templateCache.put('error-messages', 'error - no template');     
        } else {
            $templateCache.put('error-messages', errortpl);
        }
    }
})();