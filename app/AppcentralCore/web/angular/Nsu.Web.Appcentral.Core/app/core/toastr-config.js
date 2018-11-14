(function () {
    var toastCfg = angular.module('AppCentral.core');

    toastCfg.run(toastConfig);
    function toastConfig(toastrConfig) {
        angular.extend(toastrConfig, {
                allowHtml: false,
                closeButton:false,
                closeHtml: '<button>×</button>',
                containerId: 'toast-container',
                extendedTimeOut: 1000,
                iconClasses: {
                    error: 'danger',
                    info: 'info',
                    success: 'success',
                    warning: 'warning'
                },
                templates: {
                    toast: 'app/core/toastr.tpl.html'
                },
                maxOpened: 0,
                messageClass: 'toast-message',
                newestOnTop: true,
                onHidden: null,
                onShown: null,
                positionClass: 'toast-top-right',
                tapToDismiss: true,
                target: 'body',
                timeOut: 5000,
                titleClass: 'toast-title',
                toastClass: 'toast'
            });
        return toastrConfig;
    }
})();

angular.module('AppCentral.core').value('cgBusyDefaults', {
    message: '',
    backdrop: false,
    templateUrl: 'app/widgets/pane/custom_spinner.tpl.html',
    delay: 300,
    minDuration: 700,
    wrapperClass: 'cg-busy cg-busy-animation'
});