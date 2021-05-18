import React from 'react';
import ClassicMode from './classicMode';
import MultiMode from './multiMode';
import '../../styles/selection.css';

const isMobile = () => {
  return /(iphone|ipad|android)/i.test(navigator.userAgent);
};

const Selection = () => {
  return (
    <div className="selection-wrapper">
      <h1>Select a game mode</h1>
      <div className="selection-flex">
        {!isMobile() && <ClassicMode />}
        <MultiMode />
      </div>
    </div>
  );
};

export default Selection;
