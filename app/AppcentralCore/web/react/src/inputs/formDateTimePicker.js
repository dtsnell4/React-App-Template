import React from 'react';
import propTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

const DateTimePicker = (props) => {
  const {
    input,
    required,
    name,
    label,
    placeholder,
    meta: { touched, error, warning },
  } = props;
  return (
    <FormGroup>
      <Label>{label}</Label>
      {required && <span className="text-danger font-weight-bold">&nbsp;*</span>}
      <DateTimePickerComponent
        name={name}
        placeholder={placeholder}
        value={input.value}
        change={(param) => { input.onChange(param.value); }}
      />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </FormGroup>
  );
};

DateTimePicker.propTypes = {
  /** The data object containing `value` parameter that holds the date for the input - `input.value` */
  input: propTypes.object.isRequired,
  /** Label for the input */
  label: propTypes.string,
  /** Meta data for the input, e.g. touched, error, warning */
  meta: propTypes.object,
  /** Name attribute for the element */
  name: propTypes.string,
  /** Placeholder text, only shows if input.value is null or does not exist */
  placeholder: propTypes.string,
  /** Boolean indicating the input is a required field */
  required: propTypes.bool,
};

export default DateTimePicker;
