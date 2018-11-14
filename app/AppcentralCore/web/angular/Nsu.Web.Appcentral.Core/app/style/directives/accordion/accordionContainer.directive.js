(function () {
	'use strict';
	var myapp = angular
		.module('AppCentral.core.layout')
		.directive('accordionContainer', accordionContainer);

	/* @ngInject */
	function accordionContainer() {
		var directive = {
			scope: {
				header: '=',
				groupid: '=',
				targetid: '=',
				color: '=',
				startopen: "=",
				active: "=",
				preview: "="
			},
			replace: true,
			transclude: true,
			controller: accordionContainerCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/accordion/accordionContainer.tpl.html',
			restrict: 'E',
			bindToController: true,
		};
		return directive;

		function accordionContainerCtrl($scope) {

		}
	}
})();