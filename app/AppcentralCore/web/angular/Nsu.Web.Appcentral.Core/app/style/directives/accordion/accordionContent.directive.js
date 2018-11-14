(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('accordionContent', accordionContent);
	/* @ngInject */
	function accordionContent() {
		var directive = {
			scope: {
				// header: '=',
			},
			replace: true,
			transclude: true,
			controller: accordionContentCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/accordion/accordionContent.tpl.html',
			restrict: 'E',
			bindToController: true,
		};
		return directive;
		function accordionContentCtrl($scope) {

		}
	}
})();