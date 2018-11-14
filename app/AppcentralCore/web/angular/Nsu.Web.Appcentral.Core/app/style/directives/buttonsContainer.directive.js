(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('buttonsContainer', buttonsContainer);
	/* @ngInject */
	function buttonsContainer() {
		var directive = {
			scope: {
				pagelocation: '='
			},
			replace: true,
			require: 'pagelocation',
			transclude: true,
			controller: buttonsContainerCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/buttonsContainer.tpl.html',
			restrict: 'E',
			bindToController: true
		};
		return directive;
		function buttonsContainerCtrl($scope) {
			//debugger;
			//var vm = this;
			//vm.location = $scope.location;
		}
	}
})();