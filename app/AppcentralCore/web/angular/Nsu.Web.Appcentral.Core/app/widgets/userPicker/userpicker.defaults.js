(function () {
    angular
        .module('userPicker')
        .value('$userModalDefaults', {
            templateUrl: 'app/widgets/userPicker/userpicker.tpl.html',
            controller: 'UserPickerController',
            controllerAs: 'adduser'
        });


})();
    