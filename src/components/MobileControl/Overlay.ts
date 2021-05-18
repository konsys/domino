import React from 'react';
import PropTypes from 'prop-types';

const Overlay = ({ children, placement }) => {
  const definedMargin = '2.5rem';
  const marginOffset =
    placement === 'left'
      ? { marginRight: definedMargin }
      : placement === 'right'
      ? { marginLeft: definedMargin }
      : null;
  const gradientOverlay =
    placement === 'left'
      ? {
          backgroundImage: 'linear-gradient(180deg, #ffffff00 , #8db38d)',
          backgroundColor: 'unset'
        }
      : placement === 'right'
      ? {
          backgroundImage: 'linear-gradient(180deg, #8db38d, #ffffff00)',
          backgroundColor: 'unset'
        }
      : null;
  return (
    <div
      style={{
        transform: 'rotate(-90deg)',
        display: 'inline-block',
        position: 'relative',
        top: '-.35rem',
        ...marginOffset
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          zIndex: 1,
          borderRadius: '0.33em',
          ...gradientOverlay
        }}
      >
        {React.cloneElement(children, {
          transform: { zIndex: -1 }
        })}
      </div>
    </div>
  );
};

Overlay.propTypes = {
  children: PropTypes.object,
  placement: PropTypes.string
};

export default Overlay;
