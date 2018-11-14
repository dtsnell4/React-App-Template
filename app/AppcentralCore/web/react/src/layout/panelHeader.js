import React from 'react';
import propTypes from 'prop-types';

const PanelHeader = (props) => {
  const {
    children,
    color,
  } = props;

  return (
    <div className={`panel-header bg-${color || 'gray'}`}>
      {children}
    </div>
  );
};

PanelHeader.propTypes = {
  color: propTypes.string,
  children: propTypes.oneOfType([propTypes.array, propTypes.element]),
};

export default PanelHeader;
