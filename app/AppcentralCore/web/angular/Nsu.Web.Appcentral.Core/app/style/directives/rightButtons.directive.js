(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('rightButtons', rightButtons);
	/* @ngInject */
	function rightButtons() {
		var directive = {
			replace: true,
			transclude: true,
			controller: rightButtonsCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/rightButtons.tpl.html',
			restrict: 'E',
			bindToController: true
		};
		return directive;
		function rightButtonsCtrl($scope) {
			//debugger;
			//var vm = this;
			//vm.location = $scope.location;
		}
	}
})();