creates a pane for 2 pane page
<div data-nsu-pane config="vm.config" item="vm.selectedItem" ng-model="vm.items"></div>

ng-model -> array of elements
item -> will have selected item 
config -> configuration object
    title -> title when collection loaded
    help -> hint/help text to display under the title
    titleEmpty -> title while collection is loading
    helpEmpty -> help text when collection is loading 
    actions -> collection of functions that can be called 
    loaded -> set to true when fully loaded
    selectable -> an item can be selected
    selectedItem -> will be updated with selected item onselect
    itemTemplate -> path if the template for a single item
    filter ->   optional function that takes 2 params (collection, searchText), returns filtered collection. 
                By default searches for test in name and desc properties