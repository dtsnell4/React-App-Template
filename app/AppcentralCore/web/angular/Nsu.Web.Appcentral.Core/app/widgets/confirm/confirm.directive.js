(function() {
    angular
        .module('appcentralConfirm')
        .directive('appcentralConfirm', confirm);

    /*@ngInject*/
    function confirm($confirm) {
        return {
            priority: 1,
            restrict: 'A',
            scope: {
                confirmIf: "=",
                ngClick: '&',
                appcentralConfirm: '='
            },
            link: function(scope, element, attrs) {
                function reBind(func) {
                    element.unbind("click").bind("click", function() {
                        func();
                    });
                }

                function bindConfirm() {

                    $confirm(scope.appcentralConfirm).then(scope.ngClick);
                }

                if ('confirmIf' in attrs) {
                    scope.$watch('confirmIf', function(newVal) {
                        if (newVal) {
                            reBind(bindConfirm);
                        } else {
                            reBind(function() {
                                scope.$apply(scope.ngClick);
                            });
                        }
                    });
                } else {
                    reBind(bindConfirm);
                }
            }
        }
    }
})();
