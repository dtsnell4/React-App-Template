import React from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';


export default class BsDropDown extends React.Component {

  render() {

    const data = this.props.data;
    const fields = this.props.fields;
    let options = [];

    _.each(data, (item) => {
      let text = item[fields.text];
      let value = item[fields.value];
      let option = <option value={value} label={text}>{text}</option>;
      options.push(option);
    });

    return (
      <div>

        <select className="input-width form-control">
          {options}
        </select>

      </div>
    )
  }
}

BsDropDown.propTypes = {
  // data: React.PropTypes.array.isRequired,
  // fields: React.PropTypes.object.isRequired,    
};

BsDropDown.defaultProps = {
  data: [],
  fields: { text: '', value: '' },
}