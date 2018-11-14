(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('panelContainer', panelContainer);
	/* @ngInject */
	function panelContainer() {
		var directive = {
			scope: {
				paneltype: '=',
			},
			replace: true,
			transclude: true,
			controller: panelContainerCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/panelContainer.tpl.html',
			restrict: 'E',
			bindToController: true
		};
		return directive;
		function panelContainerCtrl($scope) {
			//debugger;
			//var vm = this;
			//vm.header = $scope.header;
			//$scope.startrow = angular.isDefined($scope.startrow) ? $scope.startrow : 'true';
		}
	}
})();