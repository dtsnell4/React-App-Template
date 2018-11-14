import React from 'react';
import propTypes from 'prop-types';
import { Label, FormGroup, Input } from 'reactstrap';

const formInput = (props) => {
  const {
    input,
    required,
    label,
    type,
    options,
    defaultOption,
    option,
    placeholder,
    disabled,
    min,
    max,
    meta: { touched, error, warning },
  } = props;
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      {required && <span className="text-danger font-weight-bold">&nbsp;*</span>}
      {type === 'select' &&
        <Input disabled={disabled} {...input} type="select">
          {defaultOption && <option value="">{defaultOption}</option>}
          {options && options.map((opt) => (<option key={opt[option.key]} value={opt[option.value]}>{opt[option.text]}</option>))}
        </Input>
      }{type !== 'select' &&
        <Input disabled={disabled} value="" {...input} min={min} max={max} placeholder={placeholder} type={type} />
      }
      {touched && ((error && <span className="invalid-feedback">{error}</span>) || (warning && <span className="form-text text-muted">{warning}</span>))}
    </FormGroup>
  );
};

formInput.propTypes = {
  /** For select inputs, sets the default selected option */
  defaultOption: propTypes.string,
  /** Setting true will disable the switch to user input */
  disabled: propTypes.bool,
  /** The state of the component (object), usually controlled by Redux Form by default. Must contain a 'value' property that controls the on/off state of the switch as true/false.  Must contain a "name" propety that is used for the id of the switch. */
  input: propTypes.object.isRequired,
  /** Label for the input */
  label: propTypes.string,
  /** For number inputs, sets the maximun allowed number */
  max: propTypes.number,
  /** For number inputs, sets the minimum allowed number */
  min: propTypes.number,
  /** Meta data about the input- `touched`, `error`, `warning` */
  meta: propTypes.object,
  /** For select input's options, defines the key (must be unique), value property and option text from the `options` property data */
  option: propTypes.object,
  /** For select inputs, contains the options for the dropdown */
  options: propTypes.array,
  /** Placeholder text for the input when applicable */
  placeholder: propTypes.string,
  /** Designates the input as a required field, adding the red asterisk and validation */
  required: propTypes.bool,
  /** Type of input, text, select, number, checkbox, radio, etc. */
  type: propTypes.string.isRequired,
};

export default formInput;
