import React from 'react';
import propTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { FroalaConfig } from '../';

const FroalaEditorComponent = (props) => {
  const {
    placeholder,
    name,
    input,
    label,
    required,
    meta: { touched, error, warning },
  } = props;

  return (
    <FormGroup>
      {label &&
        <Label>{label}
          {required && <span className="text-danger font-weight-bold">&nbsp;*</span>}
        </Label>
      }
      <FroalaEditor
        name={name}
        tag="textarea"
        config={{ placeholder, ...FroalaConfig }}
        model={input.value}
        onModelChange={(model) => { input.onChange(model); }}
      />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </FormGroup>
  );
};

FroalaEditorComponent.propTypes = {
  input: propTypes.object,
  name: propTypes.string,
  label: propTypes.string,
  required: propTypes.bool,
  meta: propTypes.object,
  placeholder: propTypes.string,
};

export default FroalaEditorComponent;
