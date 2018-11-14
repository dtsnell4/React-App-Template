(function () {
	'use strict';
	angular
		.module('AppCentral.core.layout')
		.directive('filtersContainer', filtersContainer);
	/* @ngInject */
	function filtersContainer() {
		var directive = {
			scope: {
				// position: '=',
				toastrexpires: "@",
			},
			replace: true,
			transclude: true,
			controller: filtersContainerCtrl,
			controllerAs: 'vm',
			templateUrl: 'app/style/directives/filtersContainer.tpl.html',
			restrict: 'E',
			bindToController: true,
		};
		return directive;
		function filtersContainerCtrl($scope, toastr) {
			var vm = this;
			vm.activate = function() {
				if ($(".filter-block").css("position") === "relative") {
	                $(".filter-content.closed").slideDown(200);
	                $(".filter-content:not(.closed)").slideUp(200);
	            } else {
	                $(".filter-content").toggle("slide", { direction: "right" }, 300);
	            }
	            $(".filter-content").toggleClass("closed");
	            $(".filter-block").toggleClass("opened");
	            $("#show-filters").toggleClass("closed");
	            $("#show-filters").children("i").toggleClass("hidden");

	            ///Remove the flashing class after first click
	            $("#show-filters").removeClass("glowing");
			}

			vm.pinFilters = function() {
				$(".filter-block").toggleClass("sticky-filters");
				$("#pin-filters").toggleClass("rotateLeft90");
			}

			vm.showToastr = function() {
				$("#show-filters").addClass("glowing");
				toastr.info('Use the "Filter" tab on the left to filter the data', 'Info!', {timeOut: 8000});
			}

			if (vm.toastrexpires) {
	            var expires = Date.parse(vm.toastrexpires);
				var now = new Date().getTime();
				if (expires > now) {
					$("#show-filters").addClass("glowing");
					toastr.info('Use the "Filter" tab on the left to filter the data', 'Info!', {timeOut: 8000});
				}
			}
		}
	}
})();