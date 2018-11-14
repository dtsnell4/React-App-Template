(function () {
    'use strict';
    angular
       .module('AppCentral.core.widgets')
       .directive('icheck', function ($timeout) {
           return {
               require: 'ngModel',
               link: function ($scope, element, $attrs, ngModel) {
                   return $timeout(function () {
                       var value = $attrs['value'];
                       $scope.$watch($attrs['ngModel'], function (newValue) {
                           $(element).icheck('update');
                       });

                       $scope.$watch($attrs['ngDisabled'], function (newValue) {
                           $(element).icheck(newValue ? 'disable' : 'enable');
                           $(element).icheck('update');
                           if (newValue) {
                               $(element).parent().addClass('disabled');
                           } else {
                               $(element).parent().removeClass('disabled');
                           }
                       });

                       return $(element).icheck({
                           checkboxClass: 'icheckbox_flat-blue',
                           radioClass: 'iradio_flat-blue'
                       }).on('ifToggled', function (event) {
                           if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                               $scope.$apply(function () {
                                   return ngModel.$setViewValue(event.target.checked);
                               });
                           }
                           if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                               return $scope.$apply(function () {
                                   return ngModel.$setViewValue(value);
                               });
                           }
                           return false;
                       });
                   });
               }
           };
       });
})();