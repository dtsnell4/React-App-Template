(function () {
    angular.module('AppCentral.core').config(config);

    function config($routeProvider, $locationProvider) {


        $locationProvider.html5Mode(true);

        $routeProvider
          .otherwise({
              redirectTo: '/'
          });

        
    }
})();