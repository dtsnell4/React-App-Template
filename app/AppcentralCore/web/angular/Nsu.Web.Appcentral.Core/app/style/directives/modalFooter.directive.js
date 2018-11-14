(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('modalFooter', modalFooter);
	/* @ngInject */
	function modalFooter() {
		var directive = {
			scope: {
				// header: '=',
			},
			replace: true,
			transclude: true,
			controller: modalFooterCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/modalFooter.tpl.html',
			restrict: 'E',
			bindToController: true,
		};
		return directive;
		function modalFooterCtrl($scope) {

		}
	}
})();