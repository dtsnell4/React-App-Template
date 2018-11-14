(function () {

  /*@ngInject*/
  angular.module('froala')
  .config(function($provide) {

    $provide.decorator('froala'+'Directive',['$delegate','$controller', function($delegate, $controller) {     
        var directive = $delegate[0];
        console.log("set key");
        //$.FroalaEditor.DEFAULTS.key = 'BomueC4ccA-7==';
        $.FroalaEditor.DEFAULTS.key = 'EA2B3G3B2tA6B4C2D4C7D1A1E1D4J4ozze1vD2A-8B-7n==';
        return $delegate;
    }]);


  });
})();
