(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('modalContainer', modalContainer);
	/* @ngInject */

	function modalContainer() {
		var directive = {
			scope: {
				targetid: '=',
				header: '=',
				actionbuttonfunction: "=",
				controller: "=",
			},
			replace: true,
			transclude: {
		        'content': 'modalContainerContent',
		        'cancel': 'modalContainerCancel',
		        'action': 'modalContainerAction'
		    },
			controller: modalContainerCtrl,
			controllerAs: 'style',
			templateUrl: 'app/style/directives/modalContainer.tpl.html',
			restrict: 'E',
			bindToController: true,
		};
		return directive;
		function modalContainerCtrl($scope) {
			
		}
	}
})();