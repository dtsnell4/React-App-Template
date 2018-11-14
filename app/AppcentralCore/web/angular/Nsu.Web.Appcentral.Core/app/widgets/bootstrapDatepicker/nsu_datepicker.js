(function () {
    'use strict';
    angular
      .module('AppCentral.core.widgets')
      .directive('nsuBootsrapDatePicker', seriesLine);


    /*@ngInject*/
    function seriesLine($parse){
        var directive = {};
        var scope, attrs;

        directive.require = ['ngModel'];
        directive.restrict = "AE";
        directive.templateUrl = "app/widgets/bootstrapDatepicker/nsu_datepicker.tpl.html";
        directive.controller = 'nsuBootstrapDatePickerController';
        directive.controllerAs = "vm";
        directive.scope = {
          format: "@",
          nsuselecteddate: "&",
          linkedDatePickerId: '@',
          linkedDatePickerBehaivor: "@",
          options: "=",
          dtPicker : "=",
          isEnable : "="
        }

        directive.link = function(scope, iElement, attrs, ngModel) {          
          scope = scope;
          attrs = attrs;

          scope.vm.format = scope.format;
          scope.vm.nsuselecteddate = scope.nsuselecteddate;
          scope.vm.linkedDatePickerId = scope.linkedDatePickerId;
          scope.vm.linkedDatePickerBehaivor = scope.linkedDatePickerBehaivor;
          scope.vm.options = scope.options;
          scope.vm.dtPicker = scope.dtPicker;
          scope.vm.isEnable = scope.isEnable;

          ngModelUpdate(ngModel, scope, iElement, attrs);

         

        }

        function ngModelUpdate(ngModel, scope, iElement, attrs){
            ngModel[0].$render = function(){
              if (!ngModel[0].$isEmpty(ngModel[0].$viewValue)) {
                  var model = ngModel[0].$viewValue;
                  scope.vm.init(model, iElement, ngModel, attrs);
               }
            }
         }

        return directive;
    }

})();
