import React from 'react';
import PropTypes from 'prop-types';

import { STYLES } from '../assets/styling';

function handleToggleInputBox(hiddenInput: any) {
  hiddenInput.current.style.display === 'block'
    ? (hiddenInput.current.style.display = 'none')
    : (hiddenInput.current.style.display = 'block');
}

function GameSelect(props: any) {
  const joinCode = React.createRef() as any;
  const hiddenInput = React.createRef() as any;
  const { onHostGame, onJoinGame } = props;

  return (
    <div>
      <img
        src={require('../assets/img/domino-lean.png').default}
        style={STYLES.gameSelect.image}
      />
      <div style={STYLES.gameSelect}>
        <h1 style={{ fontWeight: 400, color: '#232323' }}>Double9 Domino</h1>
        <button onClick={onHostGame} style={STYLES.gameSelect.button}>
          Host Game
        </button>
        <button
          style={STYLES.gameSelect.button}
          onClick={() => handleToggleInputBox(hiddenInput)}
        >
          Join Game
        </button>
        <div ref={hiddenInput} style={{ display: 'none' }}>
          <input ref={joinCode} type="text" style={STYLES.gameSelect.input} />
          <button
            style={STYLES.gameSelect.button.join}
            onClick={() => onJoinGame(joinCode)}
          >
            Join
          </button>
        </div>
        <div style={STYLES.gameSelect.footer} className="footer">
          <a
            style={{ color: 'white', textDecoration: 'none' }}
            href=""
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={require('../assets/img/github_white.png').default}
              style={STYLES.gameSelect.footer.image}
            />
            <p
              style={{
                display: 'inline-block',
                margin: 0,
                fontSize: '.8em',
              }}
            >
              pseudoralph
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

GameSelect.propTypes = {
  onHostGame: PropTypes.func.isRequired,
  onJoinGame: PropTypes.func.isRequired,
};

export default GameSelect;
