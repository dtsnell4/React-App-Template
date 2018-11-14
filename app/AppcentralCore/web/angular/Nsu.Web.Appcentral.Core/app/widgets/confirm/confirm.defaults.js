(function () {
    angular
        .module('appcentralConfirm')
        .value('$confirmModalDefaults', {
            templateUrl: 'app/widgets/confirm/confirm.tpl.html',
            controller: 'ConfirmModalController'
        });


})();
    