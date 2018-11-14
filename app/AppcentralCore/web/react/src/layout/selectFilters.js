import React from 'react';
import propTypes from 'prop-types';

const selectFilters = ({ text = '' }) => (
  <div className="dashed-message">
    <div>{text} <span className="d-md-none">above.</span><span className="d-none d-md-inline-block">on the right.</span></div>
    <i className="fa fa-arrow-circle-right fa-3x d-none d-md-inline-block"></i>
    <i className="fa fa-arrow-circle-up fa-3x d-md-none"></i>
  </div>
);
selectFilters.propTypes = {
  text: propTypes.string,
};

export default selectFilters;
