(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('modalContent', modalContent);
	/* @ngInject */
	function modalContent() {
		var directive = {
			scope: {
				// header: '=',
			},
			replace: true,
			transclude: true,
			controller: modalContentCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/modalContent.tpl.html',
			restrict: 'E',
			bindToController: true,
		};
		return directive;
		function modalContentCtrl($scope) {

		}
	}
})();