/**
 * @desc Please provide useful information regarding the directive with a proper example
 * @example <div upload url="urlToUpload"></div>
 * vm.urlToUpload = 'files/' + currentInstance.getInstance().id;
 */

(function () {
    angular
        .module('AppCentral.core.widgets')
        .directive('upload', upload);
    /*@ngInject*/
    function upload(Upload) {
        var directive = {
            scope: {
                url: '=url',
                uploading: '=uploading',
                name: '@name',
                ngModel: '='
            },
            controller: uploadCtrl,
            controllerAs: 'upload',
            link: uploadLink,
            templateUrl: 'app/widgets/upload/upload-directive.tpl.html',
            restrict: 'A'
        };

        /*@ngInject*/
        function uploadCtrl($scope, toastr, $confirm, $rootScope, sharedUploadProperties) {

            var vm = this;
            vm.progress = 0;
            vm.oldfile = null;
            $scope.uploading = false;
            vm.name = $scope.name;
            vm.url = $scope.url;
            debugger;
            vm.files = $scope.ngModel;
            vm.oldfile = vm.files;
            vm.id = 0;
            vm.extensions = sharedUploadProperties.extensions;




            vm.removeFile = function () {
                $confirm(
                    {
                        text: 'Are you sure you want to remove this file?',
						type: 'remove',
                        header: 'Remove'
                    }
                        ).then(function (data) {

                $scope.ngModel = null;
                vm.oldfile = null;

                        }, function () {
                        });
            };



            vm.upload = function (files, $event, $rejectedFiles) {


                if ($rejectedFiles && $rejectedFiles.length) {
                    toastr.error('Invalid file type. Please select ' + vm.extensions, 'Error');
                    return;
                }



                if (files && files.length && vm.url) {
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        $scope.uploading = true;
                        Upload.upload({
                            url: vm.url,
                            fields: {},
                            file: file
                        }).progress(function (evt) {
                            $scope.uploading = true;
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                            vm.progress = progressPercentage;
                        }).success(function (data) {
                            $scope.uploading = false;
                            vm.id = data.id;
                            vm.done = true;
                            vm.progress = 100;
                            $scope.ngModel = data;
                            vm.oldfile = data;
                            toastr.success(data.name + ' ' + 'uploaded. Please save to complete this process.', 'Success!');
                        }).error(function (data) {
                            $scope.uploading = false;
                            vm.done = false;
                            vm.progress = 0;
                            vm.oldfile = undefined;
                            toastr.error('Upload Failed! ' + data.message, 'Error');
                        });
                    }
                }
            };
        }
        function uploadLink($scope, element, attrs, ngModel) {
            
        }
        return directive;
    }



})();
