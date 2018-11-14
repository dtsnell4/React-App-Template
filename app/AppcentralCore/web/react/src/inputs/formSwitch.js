import React from 'react';
import propTypes from 'prop-types';
import { Label } from 'reactstrap';

const FormSwitch = (props) => {
  const {
    input,
    primaryColored,
    className,
    disabled,
    onSwitchToggle,
  } = props;

  if (!input.name) console.log('Warning: FormSwitch component requires a "name" property in the "input" object.  Currently: ', input.name);
  if (!input.name) console.log('Warning: FormSwitch component requires a "value" property of true/false in the "input" object.  Currently: ', input.value);

  return (
    <div className={`onoffswitch ${className} ${disabled ? 'disabled' : ''}`}>
      {/* <input type="checkbox" id="onoffswitch" className="onoffswitch-checkbox" defaultChecked={props.defaultChecked} onChange={props.onSwitchToggle} /> */}
      <input {...input} defaultChecked={input.value || false} onChange={onSwitchToggle} type="checkbox" id={`onoffswitch[${input.name}]`} className="onoffswitch-checkbox" disabled={disabled} />
      <Label className="onoffswitch-label" htmlFor={`onoffswitch[${input.name}]`}>
        <span className={`onoffswitch-inner ${primaryColored ? 'primary' : ''}`}></span>
        <span className="onoffswitch-switch"></span>
      </Label>
    </div>
  );
};

FormSwitch.defaultProps = {
  primaryColored: false,
  disabled: false,
};

FormSwitch.propTypes = {
  /** Optional class name(s) for the switch */
  className: propTypes.string,
  /** Setting true will disable the switch to user input */
  disabled: propTypes.bool,
  /** The state of the component (object), usually controlled by Redux Form by default. Must contain a 'value' property that controls the on/off state of the switch as true/false.  Must contain a "name" propety that is used for the id of the switch. */
  input: propTypes.object.isRequired,
  /** An optional function to be executed whenever the switch toggles */
  onSwitchToggle: propTypes.func,
  /** If set to true, sets the stwich color to bootstrap primary blue instead of success green */
  primaryColored: propTypes.bool,
};

export default FormSwitch;
