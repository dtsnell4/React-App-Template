(function () {
    'use strict';

    angular.module('AppCentral.core',
        [
            'AppCentral.urls',
            'LocalStorageModule',
            'ngRoute',
            'ngSanitize',
            'toastr',
            'angular-jwt',
            'AppCentral.core.formwidgets',
            'ui.sortable',
            'pascalprecht.translate',
            'ngFileSaver',
            'ui.grid'
        ]);

})();