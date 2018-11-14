(function () {
    angular
      .module('AppCentral.core.help')
      .controller('HelpViewController', HelpViewController);


    function HelpViewController(config, $scope, $rootScope, currentInstance, HelpResource, sharedUploadProperties, instanceId) {
        var help = this;
        var updatefiles = true;

        sharedUploadProperties.extensions = '.pdf,.jpg,.jpeg,.png,.gif';

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

                var htmlContent = document.getElementById("htmlContent");
                htmlContent.innerHTML = help.content;
            });
        }

        help.url = config.appCentralApi + 'instances/' + currentInstance.getInstance().id + '/files';

    }

})();