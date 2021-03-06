import React from 'react';
import propTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';

const TimePicker = (props) => {
  const {
    input,
    required,
    label,
    placeholder,
    name,
    // meta: { touched, error, warning },
  } = props;
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      {required && <span className="text-danger font-weight-bold">&nbsp;*</span>}
      <TimePickerComponent
        name={name}
        strictMode
        placeholder={placeholder}
        value={input.value}
        change={(param) => { input.onChange(param.value); }}
      />
      {/* {touched && ((error && <span className="invalid-feedback">{error}</span>) || (warning && <span className="invalid-feedback">{warning}</span>))} */}
    </FormGroup>
  );
};

TimePicker.propTypes = {
  /** The data object containing `value` parameter that holds the date for the input - `input.value`, and an optional onChange() function */
  input: propTypes.object.isRequired,
  /** Label for the input */
  label: propTypes.string,
  /* Meta data for the input, e.g. touched, error, warning */
  // meta: propTypes.object,
  /** Name attribute for the element */
  name: propTypes.string,
  /** Placeholder text, only shows if input.value is null or does not exist */
  placeholder: propTypes.string,
  /** Boolean indicating the input is a required field */
  required: propTypes.bool,
};

export default TimePicker;
