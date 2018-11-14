import React from 'react';
import propTypes from 'prop-types';

const PanelBody = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="panel-body d-flex">
      {children}
    </div>
  );
};

PanelBody.propTypes = {
  children: propTypes.oneOfType([propTypes.array, propTypes.element]),
};

export default PanelBody;
