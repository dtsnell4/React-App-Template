(function() {
    'use strict';
    angular.module('AppCentral.core.widgets', ['ngSanitize', 'appcentralConfirm', 'datatables', 'datatables.bootstrap',
        'datatables.tabletools','datatables.colvis', 'summernote', 'ng-bootstrap-datepicker',
    'ui.bootstrap.datetimepicker',    'angular.filter', 'xeditable', 'oi.select', 'frapontillo.bootstrap-switch', 'nsufroala']).
factory('DTLoadingTemplate', dtLoadingTemplate);
    function dtLoadingTemplate() { 
        return {
            html: '' 
        };
    };
})();