/* DEPRICATED */

import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

class UploaderImageList extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    const { childs } = document.getElementsByClassName('e-file-select-wrap');
    console.log(childs);
    /* eslint-disable-next-line */
    this.parentEl = document.getElementsByClassName('e-file-select-wrap')[0];
    this.el.id = 'image-list';
    this.parentEl.appendChild(this.el);
  }
  componentWillUnmount() {
    this.parentEl.removeChild(this.el);
  }


  render() {
    // Use a portal to render the children into the syncfusion uploader
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

UploaderImageList.propTypes = {
  children: propTypes.array,
};

export default UploaderImageList;
