(function () {
    'use strict';
    angular
       .module('AppCentral.core.widgets')
       .directive('richEditor', function ($timeout, $interval) {
           return {
               require: 'ngModel',
               link: function ($scope, element, $attrs, ngModel) {
                   return $timeout(function () {
                       $scope.editor = $(element).wysihtml5({
                           //toolbar: 'toolbar'
                           toolbar: {
                               'font-styles': false,
                               "foreColorStyle": true,
                               "bgColorStyle": true,
                               "link": false, 
                               "image": false,
                               "blockquote": false,
                               "size": 'sm'                          
                           }
                       });
                       $scope.$watch($attrs['ngModel'], function (newValue) {
                           if ($(element).val() !== newValue) {
                               if ($scope.editor) {
                                   $scope.editor.innerHTML = newValue;

                               }
                               if ($scope.editor.composer) {
                                   $scope.editor.composer.setValue(newValue);
                               }
                           }
                       });
                       $scope.$watch(
                           function () { return $(element).val(); },
                           function(newValue, oldValue) {
                               if (newValue !== oldValue) {
                                   ngModel.$setViewValue($(element).val());
                               }
                           }
                       );
                       window.el = $(element);
                       $(element).parent().children('.wysihtml5-sandbox').contents().find('body').on('keydown', function () {
                           console.log("keydown");
                           ngModel.$setViewValue($(element).val());
                       });
                       
                   });
               }
           };
       });
})();