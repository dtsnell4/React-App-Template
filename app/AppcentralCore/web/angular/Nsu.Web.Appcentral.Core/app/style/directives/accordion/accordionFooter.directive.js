(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('accordionFooter', accordionFooter);
	/* @ngInject */
	function accordionFooter() {
		var directive = {
			scope: {
				// header: '=',
			},
			replace: true,
			transclude: true,
			controller: accordionFooterCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/accordion/accordionFooter.tpl.html',
			restrict: 'E',
			bindToController: true,
		};
		return directive;
		function accordionFooterCtrl($scope) {

		}
	}
})();