angular.module('AppCentral.core.filters')

        .filter('formatUtcDate', function () {
         
            return function (input,dateformat) {
             
                if (dateformat == null) {                 
                    dateformat = 'MM/DD/YYYY  h:mm a z';
                }
                return moment(moment.utc(input).toDate()).format(dateformat); 
            };


        });

angular.module('AppCentral.core.filters')

        .filter('formatTimeline', function () {
            return function (input) {
                return moment(moment.utc(input).toDate()).format('MMM DD');
            };


        });

        

angular.module('AppCentral.core.filters')
  .filter("startDate", function() {
    return function(input, startDate, format) {

        if(!input){
            return false;
        }

        console.log(moment(input).format(format), "input is before",  moment(startDate).format(format));
        var result = moment(input).isBefore(moment(startDate, format));
        return result;        
  };
});

angular.module('AppCentral.core.filters')
  .filter("endDate", function() { 
    return function(input, endDate, format) {

        if(!input){
            return false;
        }

        console.log(moment(input).format(format), "input is after",  moment(endDate).format(format));
        var result = moment(input).isAfter(moment(endDate, format));
        return result;
                
  };
});
