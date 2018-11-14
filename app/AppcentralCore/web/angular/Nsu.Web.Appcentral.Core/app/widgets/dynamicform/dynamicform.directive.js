(function () {
    angular
        .module('AppCentral.core.widgets').directive('ngCustomForm', ngCustomForm);
    /*@ngInject*/
    function ngCustomForm() {
        // debugger;
        var directive = {
            // We limit this directive to attributes only.
            restrict: 'A',
            require: 'ngModel',
            replace: true,
            scope: {

                ngModel: '='
            },
            // We will not replace the original element code

            controller: FormBuilderEventCtrl,

            // We must supply at least one element in the code 
            templateUrl: 'app/widgets/dynamicform/dynamicform.tpl.html'
        };
        return directive;
    }
    function FormBuilderEventCtrl($scope) {
        // debugger;
        $scope.newField = {};
        $scope.newField.editMode = false;
     
        $scope.$watch(function () {
            return $scope.ngModel;
        }, function () {
            $scope.fields = $scope.ngModel;
        }, true);



    }
})();