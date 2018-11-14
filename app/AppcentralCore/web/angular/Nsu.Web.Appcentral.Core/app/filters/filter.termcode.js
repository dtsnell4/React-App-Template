angular.module('AppCentral.core.filters')
      
        .filter('convertTermcode', function () {

        	return function (input) {

        		var description = '';

        		if (input)
        		{
        			var term = input.substring(4, 6);
        			var year = input.substring(0, 4);

        			switch (term) {
        				case '00':
        				    description = "ContinuingEd/Prov Dev " + (parseInt(year) - 1);
        					break;
        			    case '10':
        			        description = "Summer II " + (parseInt(year) - 1);
        			        break;
        				case '20':
        					description = "Fall " + (parseInt(year) - 1);
        					break;
        				case '30':
        					description = "Winter " + year;
        					break;
        			    case '40':
        			        description = "Spring " + year;
        			        break;
        			    case '50':
        			        description = "Summer I " + year;
        			        break;
        			}

        		}

        		return description;
        	};


        });