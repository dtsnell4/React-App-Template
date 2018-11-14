(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('blockContainer', blockContainer);
	/* @ngInject */
	function blockContainer() {
		var directive = {
			scope: {
				header: '=',
			},
			replace: true,
			transclude: true,
			controller: blockContainerCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/blockContainer.tpl.html',
			restrict: 'E',
			bindToController: true
		};
		return directive;
		function blockContainerCtrl($scope) {
			//debugger;
			//var vm = this;
			//vm.header = $scope.header;
			//$scope.startrow = angular.isDefined($scope.startrow) ? $scope.startrow : 'true';
		}
	}
})();