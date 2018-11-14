import React from 'react';
import reactCSS from 'reactcss';
import propTypes from 'prop-types';
import { CirclePicker } from 'react-color';

class FormColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  handleClose() {
    this.setState({ displayColorPicker: false });
  }

  render() {
    /* TODO: Move this into the scss where it belongs */
    const styles = reactCSS({
      default: {
        color: {
          width: '75px',
          height: '20px',
          borderRadius: '0px',
          background: this.props.input.value,
        },
        swatch: {
          padding: '7px',
          background: '#fff',
          borderRadius: '0px',
          border: '1px solid #ccc',
          /* boxShadow: '0 0 0 1px rgba(0,0,0,.1)', */
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div className="color-picker">
        {/* eslint-disable */}
        <div role="button" style={styles.swatch} onClick={this.handleClick} tabIndex="0" >
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ?
          <div style={styles.popover}>
            <div role="button" style={styles.cover} onClick={this.handleClose} tabIndex="0" />
            {/* eslint-enable */}
            <CirclePicker className="d-flex justify-content-center" color={this.props.input.value} colors={this.props.colors} onChange={(color) => { this.props.input.onChange(color.hex); }} />
          </div> : null
        }
      </div>
    );
  }
}

FormColorPicker.propTypes = {
  /** The data object containing `value` parameter that holds the color for the input - `input.value`, and an optional onChange() function */
  input: propTypes.object.isRequired,
  /** An array of hex colors */
  colors: propTypes.array.isRequired,
};

export default FormColorPicker;
