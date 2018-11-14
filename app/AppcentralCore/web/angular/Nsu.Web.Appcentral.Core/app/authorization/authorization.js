(function () {
    angular
      .module('AppCentral.authorization')
      .controller('authorizationController', authorizationController);
    /* @ngInject */
    function authorizationController($location, currentInstance) {
        var vm = this;
    
        vm.redirectToLogin = function () {
            //debugger;
            console.log('redirectToLogin');
            $location.path('/' + currentInstance.getInstance().slug + '/dashboard');
        };
    }
})();