import React from 'react';
import PropTypes from 'prop-types';
import { styling } from './styling';

const ConnectToDisplay = ({ handleDisplayConnect }: any) => {
  const displayGameCode = React.createRef() as any;

  return (
    <div className="selection-option-multi-box" style={{ marginTop: '2em' }}>
      <img
        src={'../../assets/img/display.png'}
        alt="connect display"
        className="ipad"
      />
      <p>
        Connect a display using your game code and gather around the screen.
      </p>
      <div style={{ position: 'relative' }}>
        <input className="slection-input" type="text" ref={displayGameCode} />
        <button
          className="selection-button"
          style={styling.inlineButton}
          onClick={() => handleDisplayConnect(displayGameCode)}
        >
          Join
        </button>
      </div>
    </div>
  );
};

ConnectToDisplay.propTypes = {
  handleDisplayConnect: PropTypes.func,
};

export default ConnectToDisplay;
