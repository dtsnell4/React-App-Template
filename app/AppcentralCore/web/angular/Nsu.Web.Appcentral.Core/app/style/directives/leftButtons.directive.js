(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('leftButtons', leftButtons);
	/* @ngInject */
	function leftButtons() {
		var directive = {
			replace: true,
			transclude: true,
			controller: leftButtonsCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/leftButtons.tpl.html',
			restrict: 'E',
			bindToController: true
		};
		return directive;
		function leftButtonsCtrl($scope) {
			//debugger;
			//var vm = this;
			//vm.location = $scope.location;
		}
	}
})();