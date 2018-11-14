(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('panelContent', panelContent);
	/* @ngInject */
	function panelContent() {
		var directive = {
			scope: {
				ac: '=',
			},
			replace: true,
			transclude: true,
			controller: panelContentCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/panelContent.tpl.html',
			restrict: 'E',
			bindToController: true
		};
		return directive;

		function panelContentCtrl($scope) {
			//debugger;
			//var vm = this;
			//vm.header = $scope.header;
			//$scope.startrow = angular.isDefined($scope.startrow) ? $scope.startrow : 'true';
		}
	}
})();