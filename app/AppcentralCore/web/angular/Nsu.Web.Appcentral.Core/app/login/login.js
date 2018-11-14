(function () {
    angular
      .module('AppCentral.core.login')
      .controller('LoginController', loginController);

    function loginController(loginProvider, $location, localStorageService) {
        var vm = this;
        if (loginProvider.isLoggedIn()) {
            console.log("already logged in");
            $location.url('/');
        }
        loginProvider.login();
    }

})();