(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('formErrors', formErrors);

    /* @ngInject */
    function formErrors($rootScope) {
        var directive = {
            require: 'form',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            var watchers = [];
            $rootScope.modelStateError = {};
            scope.error = [];
            $rootScope.$watch('modelStateError', function () {
                var errors = $rootScope.modelStateError;
                angular.forEach(errors, function (error, key) {
                    var el = ctrl[key];
                    if (el) {
                        setupWatch(key);
                        angular.forEach(error, function (er) {
                            if (er.indexOf('minimum length') >= 0) {
                                el.$setValidity('minlength', false);
                            }
                            if (er.indexOf('maximum length') >= 0) {
                                el.$setValidity('maxlength', false);
                            }
                            if (er.indexOf('field is required') >= 0) {
                                el.$setValidity('required', false);
                            }
                            if (er.indexOf('unique') >= 0) {
                                el.$setValidity('unique', false);
                            }
                        });

                    } else {
                        angular.forEach(error, function(er) {
                            scope.error.push(er);

                        });
                    }
                });
            });

            function setupWatch(name) {
                if (!watchers[name]) {
                    var skip = true;
                    watchers[name] = scope.$watch(function() { return ctrl[name].$modelValue; }, function() {
                        if (skip === true) {
                            skip = false;
                            return;
                        }
                        ctrl[name].$setValidity('modelStateError', true);
                        ctrl[name].$setValidity('minlength', true);
                        ctrl[name].$setValidity('maxlength', true);
                        ctrl[name].$setValidity('required', true);
                        ctrl[name].$setValidity('unique', true);
                        ctrl[name].$validate();
                    });
                }
            }
        }
    }
})();