(function () {
    'use strict';
    angular.module('appcentralMultiSelect', [])
    .directive('appcentralMultiSelect', function ()
    {
        return {
            restrict: 'AE',
            require: 'ngModel',
            scope: {
                ngModel: '=',
                selectedModel: '=',
                selectionText:'='
            },
            templateUrl: 'app/widgets/multiSelect/multiselect.tpl.html',
            controller: function ($scope) {
            },
            link: function (scope, elem, attr)
            {
                var $dropdownTrigger = elem.children()[0];;

                scope.selectionText = attr.selectionText;
                if(scope.selectionText == "" || scope.selectionText == undefined)
                {
                    scope.selectionText = "Select and Item";
                }

                scope.checkboxClick = function (event, id) {
                    scope.setSelectedItem(id);
                    //event.stopImmediatePropagation();
                };

                scope.getButtonText = function () {
                    console.log("check");
                    return scope.PopulationIds.length;
                }

                scope.PopulationIds = [];
                scope.toggle = function (item) { scope.togglePopulations(item); };
                scope.togglePopulations = function (item) {
                    
                    var idx = scope.PopulationIds.indexOf(item);
                    if (idx > -1) {
                        scope.PopulationIds.splice(idx, 1);
                    } else {
                        scope.PopulationIds.push(item);
                    }
                    if (scope.PopulationIds.length <= 0) { scope.selectionText = "Select from the list"; }
                    else { scope.selectionText = "Items Selected: " + scope.PopulationIds.length; }
                    scope.ngModel.selectedItems = scope.PopulationIds;
                    scope.selectedModel = scope.PopulationIds;
                    return scope.PopulationIds;
                };


            }
        };

    }

    );
})();

/*
 (function () {
    'use strict';
    angular.module('AppCentral.core.widgets', []);
    angular.directive('appcenteralMultiSelect', appcenteralMultiSelect);

    function appcenteralMultiSelect()
    {
        return {
            replace: true,
            priority: 1,
            require: 'ngModel',
            scope: {ngModel:'='},
            template: function (element, attrs) {
                var template = '<div class="multiselect-parent btn-group dropdown-multiselect"><h1>testing</h1></div>';
                element.html(template);
            },
            controller: function ($scope) {
            }
        };
    };

})();
 * 
 */