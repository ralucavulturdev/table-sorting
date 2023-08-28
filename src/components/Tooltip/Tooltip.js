import React from 'react';
import './Tooltip.scss';

const Tooltip = ({ text, position, positionRef }) => {
  const tooltipClassName = `tooltip ${position}`;

  const tooltipStyle = {
    left: `${positionRef}px`,
  };

  return (
    <div className={tooltipClassName} style={tooltipStyle}>
      {text}
    </div>
  );
};

export default Tooltip;
