import React, { useState } from 'react';
import randomWords from 'random-words';
import { connect } from 'react-redux';
import { startGame, grabFichas } from '../../actions';

import { Redirect } from 'react-router-dom';
import { styling } from './styling';
import ConnectToDisplay from './connectDisplay';

const MultiMode = ({ dispatch }: any) => {
  const [gameState, setGameState] = useState<any>({});

  const gameCodeUserInput = React.createRef() as any;

  const handleIsHosting = () => {
    const randomGameId = randomWords(2).join('-');
    const player = 'p1';

    setGameState({
      gameId: randomGameId,
      player,
      mode: 'controller',
    });

    dispatch(startGame(randomGameId, 'controller'));
    dispatch(grabFichas(randomGameId, player));
  };

  const handleIsJoining = () => {
    //eslint-disable-next-line no-extra-boolean-cast
    if (!!gameCodeUserInput.current.value) {
      const joinCode = gameCodeUserInput.current.value.toLowerCase();
      const player = 'p2';

      setGameState({ gameId: joinCode, player, mode: 'controller' });
      dispatch(grabFichas(joinCode, player));
    }
  };

  const handleDisplayConnect = (gameCode: any) => {
    //eslint-disable-next-line no-extra-boolean-cast
    if (!!gameCode.current.value) {
      const joinCode = gameCode.current.value.toLowerCase();
      setGameState({ gameId: joinCode, mode: 'display' });
    }
  };

  if (gameState.gameId && gameState.mode === 'controller') {
    return (
      <Redirect
        to={{
          pathname: '/controller',
          state: gameState,
        }}
      />
    );
  } else if (gameState.gameId && gameState.mode === 'display') {
    return (
      <Redirect
        to={{
          pathname: '/display',
          state: gameState,
        }}
      />
    );
  } else {
    return (
      <div className="selection-option-multi">
        <div className="selection-option-multi-box">
          <img
            src={'../../assets/img/controller.png'}
            alt="controller mode"
            className="iphone"
          />
          <button className="selection-button-host" onClick={handleIsHosting}>
            Host
          </button>
          <p>
            Mobile dominos game play. Play with an iPhone or Android phone. To
            start a game, simply click host and share the game code with a
            friend.
          </p>

          <div style={{ position: 'relative' }}>
            <input
              className="slection-input"
              type="text"
              ref={gameCodeUserInput}
            />
            <button
              className="selection-button"
              style={styling.inlineButton}
              onClick={handleIsJoining}
            >
              Join
            </button>
          </div>
        </div>
        <ConnectToDisplay handleDisplayConnect={handleDisplayConnect} />
      </div>
    );
  }
};

export default connect()(MultiMode);
