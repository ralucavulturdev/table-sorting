import React, { useState, useRef, useEffect } from 'react';
import './RangeSliderFilter.scss';
import Tooltip from '../Tooltip/Tooltip';

const HIGHER_REVENUE = 572754;

const RangeSliderFilter = ({ onChange }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(HIGHER_REVENUE);
  const [showMinTooltip, setShowMinTooltip] = useState(false);
  const [showMaxTooltip, setShowMaxTooltip] = useState(false);
  const [minThumbPosition, setMinThumbPosition] = useState(0);
  const [maxThumbPosition, setMaxThumbPosition] = useState(0);
  const rangeRef = useRef(null);

  const handleRangeChange = (event) => {
    const { value } = event.target;
    const thumbWidth = rangeRef.current.clientWidth / (HIGHER_REVENUE - 0);
    const offsetLeft = rangeRef.current.getBoundingClientRect().left;
    const position = (value - 0) * thumbWidth + offsetLeft;

    if (event.target.id === 'revenue-min') {
      if (value <= maxValue) {
        setMinValue(value);
        setMinThumbPosition(position);
      }
    } else if (event.target.id === 'revenue-max') {
      if (value >= minValue) {
        setMaxValue(value);
        setMaxThumbPosition(position);
      }
    }
  };

  const handleMinThumbMouseEnter = () => {
    setShowMinTooltip(true);
  };

  const handleMinThumbMouseLeave = () => {
    setShowMinTooltip(false);
  };

  const handleMaxThumbMouseEnter = () => {
    setShowMaxTooltip(true);
  };

  const handleMaxThumbMouseLeave = () => {
    setShowMaxTooltip(false);
  };

  useEffect(() => {
    const thumbWidth = rangeRef.current.clientWidth / (HIGHER_REVENUE - 0);
    const minPosition =
      (minValue - 0) * thumbWidth +
      rangeRef.current.getBoundingClientRect().left;
    const maxPosition =
      (maxValue - 0) * thumbWidth +
      rangeRef.current.getBoundingClientRect().left;

    setMinThumbPosition(minPosition);
    setMaxThumbPosition(maxPosition);
  }, [minValue, maxValue]);

  useEffect(() => {
    onChange(minValue, maxValue);
  }, [minValue, maxValue, onChange]);

  return (
    <div className='range-slider'>
      MIN:
      <input
        type='range'
        id='revenue-min'
        name='revenue'
        min='0'
        max={HIGHER_REVENUE}
        value={minValue}
        onChange={handleRangeChange}
        onMouseEnter={handleMinThumbMouseEnter}
        onMouseLeave={handleMinThumbMouseLeave}
        ref={rangeRef}
      />
      {showMinTooltip && (
        <Tooltip
          text={minValue}
          position='top'
          positionRef={minThumbPosition}
        />
      )}
      <div
        className='range-slider-track'
        style={{
          left: `${minThumbPosition}px`,
          width: `${maxThumbPosition - minThumbPosition}px`,
        }}
      />
      MAX:
      <input
        type='range'
        id='revenue-max'
        name='revenue'
        min='0'
        max={HIGHER_REVENUE}
        value={maxValue}
        onChange={handleRangeChange}
        onMouseEnter={handleMaxThumbMouseEnter}
        onMouseLeave={handleMaxThumbMouseLeave}
        ref={rangeRef}
      />
      {showMaxTooltip && (
        <Tooltip
          text={maxValue}
          position='bottom'
          positionRef={maxThumbPosition}
        />
      )}
    </div>
  );
};

export default RangeSliderFilter;
