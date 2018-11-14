(function () {
  'use strict'
  angular
    .module('AppCentral.core.widgets')
    .controller('nsuBootstrapDatePickerController', ViewControllerDatePicker)

  /*@ngInject*/
  function ViewControllerDatePicker ($scope, $timeout, $rootScope) {
    var vm = this;
    var container;
    var init = false;
    var ngModel;


    $scope.$watch('isEnable', function (newValue, oldValue, scope) {
        
        if(container){

          console.log(newValue);

		  if(angular.isUndefined(newValue)){
			  $(container).data('DateTimePicker').enable();
		  }
          else if(newValue){
            $(container).data('DateTimePicker').enable();
          }
          else{
            $(container).data('DateTimePicker').disable();
          }
        }

    });

    /*
    Is the first method and intializate the control
    */
    vm.init = function (model, iElement, _ngModel, attrs) {
      
      // The init var is a var for control that inisialization occurs only once
      if (!init) {
        init = true;
        ngModel = _ngModel;
        container = $(iElement[0]).find('.nsudatapicker')[0];               

        // Default format to the datepicker
        // Can be overwrite by the user
        var format = 'MMM DD, YYYY';


        // If the user wants to overwrite the format of the datepicker
        if (vm.format) {

          switch (vm.format) { 
            case "date":
              format = 'MMM DD, YYYY';
              break;
            case "time":
              format = 'hh:mm';
              break;
            case "datetime":             
              format = 'MMM DD, YYYY  hh:mm'; 
              break;
            case "time a":             
              format = 'hh:mm a'; 
              break;
            case "shortdate":
                format = 'MM/DD/YY';
                break;
            default:
              format = 'MMM DD, YYYY';
              break;
          }
        }

        // Default option 
        // model is the ng-model roperty
        var options = {
          format: format,
          date: model,
          ignoreReadonly: true
        }

        // If the user wants to set other properties could use options
        // those options will be merged with the default proporties
        var mergedOptions = _.merge({}, options, vm.options)

        // Initialize the control
        $(container).datetimepicker(mergedOptions)
          .on('dp.change', changeDatePicker)

        //expose the control whenever is used
        vm.dtPicker = $(container).data('DateTimePicker')

        // If this control is linked to another datepicker (Range date picker)
        // The relation is set using broadcast and on function on the root scope
        if (vm.linkedDatePickerId && attrs.id) {
          initListener(attrs.id)
        }
      }

      // Ocuurs when the model changes
      if (model) {
        changeModel(container, model)
      }
    }

    function changeModel (container, model) {
      // Date picker range
      //If the controls belong to range datepicker the min and max valinue need to be updated on
      //Every change so the control min and max it is cleaned
      if (vm.linkedDatePickerBehaivor) {
        $(container).data('DateTimePicker').maxDate(false)
        $(container).data('DateTimePicker').minDate(false)

        $timeout(function () {
          $(container).data('DateTimePicker').date(moment(model))
          try{
            changeDatePicker({date: moment(model)})
          }
          catch(ex){
            changeDatePicker({date: model})
          };
        }, 0);
        
      }else {
        try{
          changeDatePicker({date: moment(model)});
          $(container).data('DateTimePicker').date(moment(model));
        }catch(ex){
          changeDatePicker({date: model});
          $(container).data('DateTimePicker').date(model);
        };
        
      }
    }

    function initListener (id) {
      $scope.$on(id, function (event, args) {
        //if this picker is the stat of interval
        //the validation occurs on the max date
        if (vm.linkedDatePickerBehaivor && vm.linkedDatePickerBehaivor == 'min') {
          if (moment(args.e.date).isValid()) {
              if (vm.format) {
                  //console.log("max date set as", moment(args.e.date).format(vm.format))
              };
            $(container).data('DateTimePicker').maxDate(args.e.date);
          }
        }
        //if this picker is the end of interval
        //the validation occurs on the min date 
        else if (vm.linkedDatePickerBehaivor && vm.linkedDatePickerBehaivor == 'max') {
          if (moment(args.e.date).isValid()) {
              if (vm.format) {
                  //console.log("min date set as", moment(args.e.date).format(vm.format))
              };
            $(container).data('DateTimePicker').minDate(args.e.date)
          }
        }
      })
    }

    function changeDatePicker (e) {
      try {
        //If belongs to a range datepicker send a message for update the state
        if (vm.linkedDatePickerId) {
          $rootScope.$broadcast(vm.linkedDatePickerId, {
            e: e
          })
        }

        //Update the value of ngmodel
        ngModel[0].$setViewValue(e.date)
        vm.nsuselecteddate({
          data: e.date
        })

      } 
      catch (ex) {
        //I did not received any error but could happen
        //console.log(ex)
      }
    }

  }
})();