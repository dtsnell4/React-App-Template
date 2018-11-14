(function () {

  /*@ngInject*/
  angular.module('summernote')
  .config(function($provide) {


    
    $provide.decorator('summernote'+'Directive',['$delegate','$controller', function($delegate, $controller) {
    
        var directive = $delegate[0];    
        var controllerName = directive.controller;

        var link = function custom(scope, element, attrs, ctrls, transclude) {
  
            var summernoteController = ctrls[0],
                ngModel = ctrls[1];

            transclude(scope, function(clone, scope) {
                // to prevent binding to angular scope (It require `tranclude: 'element'`)
                element.append(clone.html());
            });
            
            summernoteController.activate(scope, element, ngModel);
        }


        directive.compile = function() {
            return function(scope, element, attrs, ctrls, transclude) {
                link.apply(this, arguments);
            };
        };


          var ctrlOverwride = function($scope, $attrs, $timeout) {
            'use strict';

             var options = {
                height: 320,
                maxHeight: 300,
                minHeight: 300,
                toolbar: [
                        ['edit', ['undo', 'redo']],
                        ['table', ['table']],
                        ['color', ['color']],
                        ['headline', ['style']],
                        ['style', ['bold', 'italic', 'underline']],
                        ['textsize', ['fontsize']],
                        ['alignment', ['ul', 'ol', 'paragraph']],
                        ['height', ['height']],                 
                        ['insert', ['picture']]                    
                ]
            };

            var currentElement,
                summernoteConfig = options;

            if (angular.isDefined($attrs.height)) { summernoteConfig.height = $attrs.height; }
            if (angular.isDefined($attrs.focus)) { summernoteConfig.focus = true; }
            if (angular.isDefined($attrs.airmode)) { summernoteConfig.airMode = true; }
            if (angular.isDefined($attrs.lang)) {
            if (!angular.isDefined($.summernote.lang[$attrs.lang])) {
                throw new Error('"' + $attrs.lang + '" lang file must be exist.');
            }
            summernoteConfig.lang = $attrs.lang;
            }

            summernoteConfig.onInit = $scope.init;
            summernoteConfig.onEnter = function(evt) { $scope.enter({evt:evt}); };
            summernoteConfig.onFocus = function(evt) { $scope.focus({evt:evt}); };
            summernoteConfig.onPaste = function(evt) { $scope.paste({evt:evt}); };
            summernoteConfig.onKeyup = function(evt) { $scope.keyup({evt:evt}); };
            summernoteConfig.onKeydown = function(evt) { $scope.keydown({evt:evt}); };
            if (angular.isDefined($attrs.onImageUpload)) {
            summernoteConfig.onImageUpload = function(files) {
                $scope.imageUpload({files:files, editable: $scope.editable});
            };
            }

            this.activate = function(scope, element, ngModel) {
            
            summernoteConfig = _.merge({}, summernoteConfig, scope.summernoteConfig);

            if(scope.summernoteConfig && scope.summernoteConfig.toolbar){
                summernoteConfig.toolbar = scope.summernoteConfig.toolbar;
            }

            var updateNgModel = function() {
                var newValue = element.code();
                if (element.summernote('isEmpty')) { newValue = ''; }
                if (ngModel && ngModel.$viewValue !== newValue) {
                $timeout(function() {
                    ngModel.$setViewValue(newValue);
                }, 0);
                }
            };

            summernoteConfig.onChange = function(contents) {
                if (element.summernote('isEmpty')) { contents = ''; }
                updateNgModel();
                $scope.change({contents:contents, editable: $scope.editable});
            };
            summernoteConfig.onBlur = function(evt) {
                (!summernoteConfig.airMode) && element.blur();
                $scope.blur({evt:evt});
            };
            if (angular.isDefined($attrs.onToolbarClick)) {
                element.on('summernote.toolbar.click', function (evt) {
                $scope.toolbarClick({evt: evt});
                });
            }

            element.summernote(summernoteConfig);

            var editor$ = element.next('.note-editor'),
                unwatchNgModel;
            editor$.find('.note-toolbar').click(function() {
                updateNgModel();

                // sync ngModel in codeview mode
                if (editor$.hasClass('codeview')) {
                editor$.on('keyup', updateNgModel);
                if (ngModel) {
                    unwatchNgModel = scope.$watch(function () {
                    return ngModel.$modelValue;
                    }, function(newValue) {
                    editor$.find('.note-codable').val(newValue);
                    });
                }
                } else {
                editor$.off('keyup', updateNgModel);
                if (angular.isFunction(unwatchNgModel)) {
                    unwatchNgModel();
                }
                }
            });

            if (ngModel) {
                ngModel.$render = function() {
                element.code(ngModel.$viewValue || '');
                };
            }

            // set editable to avoid error:isecdom since Angular v1.3
            if (angular.isDefined($attrs.editable)) {
                $scope.editable = editor$.find('.note-editable');
            }
            if (angular.isDefined($attrs.editor)) {
                $scope.editor = element;
            }

            currentElement = element;
            // use jquery Event binding instead $on('$destroy') to preserve options data of DOM
            element.on('$destroy', function() {
                element.destroy();
                $scope.summernoteDestroyed = true;
            });
            };

            $scope.$on('$destroy', function () {
            // when destroying scope directly
            if (!$scope.summernoteDestroyed) {
                currentElement.destroy();
            }
            });
        };

        


        /*@ngInject*/
        directive.controller = ctrlOverwride;

         return $delegate;

    }]);
  });
})();