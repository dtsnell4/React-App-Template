(function () {
    angular
        .module('AppCentral.core.widgets').directive('ngCustomDetails', ngCustomDetails);
    /*@ngInject*/
    function ngCustomDetails() {
        // debugger;

        var directive = {
            // We limit this directive to attributes only.
            restrict: 'A',
            require: 'ngModel',
            replace: true,
            scope: {

                ngModel: '='
            },
            // We will not replace the original element code

            controller: CustomDetailsCtrl,

            // We must supply at least one element in the code 
            templateUrl: 'app/widgets/dynamicform/dynamicformDetails.tpl.html'
        };
        return directive;
    }
    function CustomDetailsCtrl($scope) {

        $scope.$watch(function () {
            return $scope.ngModel;
        }, function () {
            $scope.fields = $scope.ngModel;
            // $scope.fields = [{"type":"text","name":"Name","width":"col-md-4","placeholder":"Please enter your name","order":1,"value":"Daniel Snell"},{"type":"select","options":[{"order":1,"name":"Option 1","value":"1"},{"order":2,"name":"Option 2","value":"2"},{"order":3,"name":"Option 3","value":"3"}],"name":"Drop Down Menu","width":"col-md-4","order":2,"required":true,"value":"1"},{"order":3,"type":"checkbox","name":"Toggle Box","width":"col-md-4","value":true},{"order":4,"type":"radio","name":"Radio Butttons","width":"col-md-6","options":[{"order":1,"name":"Option 1","value":"1"},{"order":2,"name":"option 2","value":"2"},{"order":3,"name":"Radio Buttons Opttion 3","value":"3"}],"value":"2"},{"order":5,"type":"number","placeholder":"Enter a number","name":"Number field test","width":"col-md-6","value":1234567890},{"order":6,"type":"textarea","placeholder":"Enter your paragraph","name":"Text Area box","width":"col-md-12","value":"Divers from around the world visit John Pennekamp Coral Reef State Park to explore the living coral reefs of the Florida Keys and experience diving amidst the area's natural wildlife habitat. Our PADI 5-Star Gold Palm facility offers two-location, two-tank dives twice daily, at 9:00am and 1:30pm.\n\nEquipment rental is available. Contact our dive shop about reservations and special rates for groups and pre-paid tours."},{"order":7,"type":"header","name":"A Heading for a new section","width":"col-md-4"},{"order":8,"type":"multiple","options":[{"order":1,"name":"Option 1","value":"1"},{"order":2,"name":"Option 2","value":"2"},{"order":3,"name":"option3","value":"3"}],"name":"Multi Select List","width":"col-md-4","value":["First","Second", "Third"]},{"order":9,"type":"email","placeholder":"Enter Email","name":"Email Address","width":"col-md-6","value":"dtsnell4@yahoo.com"},{"order":10,"type":"phone","placeholder":"###-###-####","name":"Phone Number","width":"col-md-4","value":"954-218-3525", "newrow":"newrow"},{"order":11,"type":"checkboxes","name":"Checkboxes","width":"col-md-4","options":[{"order":1,"name":"Option 1","value":"1"},{"order":2,"name":"Option 2","value":"2"},{"order":3,"name":"Option 3","value":"3"}],"value":{"Option 1":true,"Option 2":true,"Option 3":false}},{"order":12,"type":"WYSIWYGEditor","width":"col-md-12","name":"WYSUWIG Editor","value":"<p>Divers from around the world visit John Pennekamp Coral Reef State Park to explore the living coral reefs of the Florida Keys and experience diving amidst the area&#39;s natural wildlife habitat. Our PADI 5-Star Gold Palm facility offers two-location, two-tank dives twice daily, at 9:00am and 1:30pm.</p><p>Equipment rental is available. Contact our dive shop about reservations and special rates for groups and pre-paid tours.</p><p>Divers from around the world visit John Pennekamp Coral Reef State Park to explore the living coral reefs of the Florida Keys and experience diving amidst the area&#39;s natural wildlife habitat. Our PADI 5-Star Gold Palm facility offers two-location, two-tank dives twice daily, at 9:00am and 1:30pm.</p><p>Equipment rental is available. Contact our dive shop about reservations and special rates for groups and pre-paid tours.</p><p>Divers from around the world visit John Pennekamp Coral Reef State Park to explore the living coral reefs of the Florida Keys and experience diving amidst the area&#39;s natural wildlife habitat. Our PADI 5-Star Gold Palm facility offers two-location, two-tank dives twice daily, at 9:00am and 1:30pm.</p><p>Equipment rental is available. Contact our dive shop about reservations and special rates for groups and pre-paid tours.</p><br><br>"},{"editMode":false,"type":"url","placeholder":"Type URL","name":"Website","width":"col-md-4","order":14,"required":true,"private":false, "value":"http://www.google.com"}, {"editMode":false,"type":"paragraph","name":"Paragraph","paragraph":"Divers from around the world visit John Pennekamp Coral Reef State Park to explore the living coral reefs of the Florida Keys and experience diving amidst the area's natural wildlife habitat. Our PADI 5-Star Gold Palm facility offers two-location, two-tank dives twice daily, at 9:00am and 1:30pm.\n\nEquipment rental is available. Contact our dive shop about reservations and special rates for groups and pre-paid tours.","width":"col-md-4","order":15}]

        }, true);
    }
})();