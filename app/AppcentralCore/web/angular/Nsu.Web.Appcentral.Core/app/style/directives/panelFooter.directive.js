(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('panelFooter', panelFooter);
	/* @ngInject */
	function panelFooter() {
		var directive = {
			replace: true,
			transclude: true,
			controller: panelFooterCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/panelFooter.tpl.html',
			restrict: 'E',
			bindToController: true
		};
		return directive;

		function panelFooterCtrl($scope) {
			//debugger;
			//var vm = this;
			//vm.header = $scope.header;
			//$scope.startrow = angular.isDefined($scope.startrow) ? $scope.startrow : 'true';
		}
	}
})();