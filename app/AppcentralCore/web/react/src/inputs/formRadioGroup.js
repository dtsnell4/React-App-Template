import React from 'react';
import propTypes from 'prop-types';
import { Label, FormGroup, Input } from 'reactstrap';

const FormRadioGroup = (props) => {
  const {
    input,
    label,
    required,
    options,
    disabled,
    meta: { touched, error, warning },
  } = props;
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      {required && label && <span className="text-danger font-weight-bold">&nbsp;*</span>}
      {options.map((option) => (
        <div key={option.id} className="custom-control custom-radio">
          <Input {...input} disabled={disabled} className="custom-control-input" checked={option.id.toString() === input.value.toString()} id={`${input.name}${option.id}`} type="radio" value={option.id.toString()} />
          <Label className="custom-control-label" for={`${input.name}${option.id}`}>{option.name}</Label>
        </div>
      ))}
      {touched && ((error && <span className="invalid-feedback">{error}</span>) || (warning && <span className="form-text text-muted">{warning}</span>))}
    </FormGroup>
  );
};

FormRadioGroup.propTypes = {
  /** Setting true will disable the radio group to user input */
  disabled: propTypes.bool,
  /** The state of the component (object), usually controlled by Redux Form by default. Contains input.name for the text of the radio, and input.value which corresponds to the value attribute of the element. */
  input: propTypes.object,
  /** Label for the form group of the component */
  label: propTypes.string,
  /** Meta data about the input- `touched`, `error`, `warning` */
  meta: propTypes.object,
  /** Object containg the list of radio elements, each containing two properties, id and name.  options.id is used as the "value" attribute for the radio element, name is used as the text for the radio. */
  options: propTypes.array,
  /** Designates the input as a required field, adding the red asterisk and validation */
  required: propTypes.bool,
};

export default FormRadioGroup;
