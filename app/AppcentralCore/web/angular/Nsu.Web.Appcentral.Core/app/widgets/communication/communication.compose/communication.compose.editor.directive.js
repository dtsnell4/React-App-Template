(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('communicationComposeEditor', CommunicationEditor);

    /* @ngInject */
    function CommunicationEditor() {

        var directive = {
            //scope: {
            //    ngModel: '=', 
            //    config: '=',
            //    item: '='
            //},
            //replace: true,
            //require: 'ngModel',
            controller: CommunicationEditorCtrl,
            controllerAs: 'composeEditor',
            link: link,
            templateUrl: 'app/widgets/communication/communication.compose/communication.compose.editor.tpl.html',
            restrict: 'A'
        };
        return directive;

        /* @ngInject */

        function CommunicationEditorCtrl($scope, $location, currentInstance) {

            var vm = this;

            var slug = currentInstance.getInstance().slug;
            vm.cancel = function () {
                $location.path("/" + slug + "/inbox");
            }


            vm.options = {
                height: 320,
                maxHeight: 300,
                minHeight: 300,
                toolbar: [
                        ['edit', ['undo', 'redo']],
                            ['color', ['color']],
                        ['headline', ['style']],
                        ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
                        ['fontface', ['fontname']],
                        ['textsize', ['fontsize']],
                     

                        ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
                        ['height', ['height']]
                        //['table', ['table']],
                        //['insert', ['link', 'picture', 'video', 'hr']],
                        //['view', ['fullscreen', 'codeview']],
                        //['help', ['help']]
                ]
            };

        }

        function link(scope, element, attrs) {
            return;
        }

    }



})();