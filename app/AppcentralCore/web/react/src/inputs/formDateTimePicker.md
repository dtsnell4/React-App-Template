# Date-Time Picker

This compnent is an AppCentral wrapper for the Syncfusion `DateTimePickerComponent` from '@syncfusion/ej2-react-calendars'.  See the documentation on Syncfusion's website for more info [https://ej2.syncfusion.com/react/demos/#/bootstrap/datetimepicker/default].

Most of the time the date-time picker will be in a form, and the form will be handled by `redux-form`.  In this case, the input will be wrapped in the redux-form `<Field>` component.  The field component will handle the input object automatically. It is implemented as follows, along with any additional properties for the input.

```
	<Field label="Start Date/Time" name="startDateTime" placeholder="Select a date and time" component={FormDateTimePicker} />
```
