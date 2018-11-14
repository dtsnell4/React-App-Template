(function () {
    angular
      .module('AppCentral.core.help')
      .controller('HelpController', HelpController);


    function HelpController(config, $scope, $rootScope, $modalInstance, currentInstance, HelpResource, sharedUploadProperties, instanceId) {
        var help = this;
        var updatefiles = true;

        sharedUploadProperties.extensions = '.pdf,.jpg,.jpeg,.png,.gif';


        help.options = {
            height: 260,
            maxHeight: 240,
            minHeight: 240,
            toolbar: [
                    ['edit', ['undo', 'redo']],
                      ['color', ['color']],
                    ['headline', ['style']],
                    ['style', ['bold', 'italic', 'underline']],
                    //['fontface', ['fontname']],
                    ['textsize', ['fontsize']],


                    //['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
                    ['height', ['height']]
                    //['table', ['table']],
                    //['insert', ['link', 'picture', 'video', 'hr']],
                    //['view', ['fullscreen', 'codeview']],
                    //['help', ['help']]
            ]
        };

        if (help.id == null || help.id == undefined) {
            var instanceToSearch = 0;
            if (instanceId != undefined && instanceId != null && instanceId > 0) {
                instanceToSearch = instanceId;
            } else {
                instanceToSearch = currentInstance.getInstance().id;
            }

            HelpResource.get({ instanceId: instanceToSearch }, function (data) {

                help.id = data.id;
                help.applicationInstance = data.applicationInstance;
                help.appname = data.applicationInstance.applicationName + ' - ' + data.applicationInstance.name
                help.content = data.content;
                help.files = [];

                if (data.files) {
                    for (var i = 0; i < data.files.length; i++) {
                        help.files[i] = {};
                        console.log(data.files[i].name);
                        help.files[i].file = data.files[i];
                        help.files[i].isImage = data.files[i].name.substr(data.files[i].name.length - 3) != "pdf";
                        help.files[i].insert = 'insert';
                        help.files[i].value = '(' + data.files[i].name + ')';
                    }
                }
            });
        }

        if (help.files == null) {
            help.files = [];
            file = { file: '' };
            help.files.push(file);
        } else if (help.files.length) {
            help.files = [];
            file = { file: '' };
            help.files.push(file);
        }

        help.fileuploaded = function () {

            if (updatefiles) {
                updatefiles = false;
                for (var i = 0; i < help.files.length; i++) {

                    if (help.files[i].file == null) {
                        help.files.splice(i, 1);
                    }
                    else if (help.files[i].file.length == 0) {
                        help.files.splice(i, 1);
                    } else {
                        help.files[i].insert = 'insert';
                    }
                }
                if (help.files.length == 0) {
                    file = { file: '' };
                    help.files.push(file);
                }
                else if (help.files[help.files.length - 1].file != null) {
                    if (help.files[help.files.length - 1].file.name) {
                        file = { file: '' };
                        help.files.push(file);
                    }
                }
                updatefiles = true;
                return;
            }
        }

        $scope.$watch(function () {
            return help.files;
        }, function () {
            help.fileuploaded();
        }, true
        );

        help.url = config.api + 'instances/' + instanceId + '/files';


        help.ok = function () {

            help.error = 'cancel';
            var helpvm = {};
            helpvm.content = help.content;
            helpvm.applicationInstance = help.applicationInstance
            helpvm.files = [];
            helpvm.id = help.id;

            for (var i = 0; i < help.files.length; i++) {
                if (help.files[i].file.length != 0) {
                    helpvm.files.push(help.files[i].file);
                }
            }

            if (help.id != null && help.id != undefined && help.id > 0)
                HelpResource.update({ instanceId: helpvm.applicationInstance.id }, helpvm);
            else
                HelpResource.save({ instanceId: helpvm.applicationInstance.id }, helpvm);
            $modalInstance.close();

        };

        help.cancel = function () {
            help.error = 'cancel';
            $modalInstance.dismiss('cancel');
        };


        help.insert = function insertfile(value) {
            var contentarea = document.getElementsByClassName('note-editable');
            var myEl = angular.element(contentarea);
            var linkedValue = "<a href='" + help.url + "/" + value.file.id + "/" + value.file.name + "'>" + value.value + "</a>";
            myEl.append(linkedValue);
        };
    }

})();