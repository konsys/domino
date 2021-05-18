import React, { CSSProperties, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { watchHand, watchGame, watchBoard, skipPlayer } from '../../actions';
import FichaTouch from './FichaTouch';
import FichaTouchDragLayer from './FichaTouchDragLayer';
import '../../styles/mobileControl.css';
import { IFicha, IGameStatus } from 'helpers/gameTypes';

const FichaTouchBundler = ({ ficha, player, gameId }: any) => {
  return (
    <div style={{ display: 'inline' }}>
      <FichaTouch
        fichaStyling={'controllerView'}
        value={ficha.value}
        fichaId={ficha.fichaId}
        key={ficha.fichaId}
        player={player}
        gameId={gameId}
      />
      <FichaTouchDragLayer
        fichaStyling={'controllerView'}
        value={ficha.value}
        fichaId={`drag_${ficha.fichaId}`}
        key={`drag_${ficha.fichaId}`}
        player={player}
        gameId={gameId}
      />
    </div>
  );
};

const MobileControl = (props: IGameStatus) => {
  const [showGameCode, setShowGameCode] = useState('block');

  useEffect(() => {
    if (props.location.state) {
      const { gameId, player } = props.location.state;

      props.dispatch(watchHand(gameId, player));
      props.dispatch(watchGame(gameId));
      props.dispatch(watchBoard(gameId));
    }
  }, []);

  const red: CSSProperties = {
    backgroundColor: '#a27a7a',
    boxShadow: 'inset 0px 0px 8px #752a2a',
  };
  const green: CSSProperties = {
    backgroundColor: '#7aa27a',
    boxShadow: 'inset 0px 0px 8px #2a7541',
  };

  if (props.location.state && props.fichas) {
    const { fichas, player, gameId, dispatch, fichasInPlay, gameStatus } =
      props;
    return (
      <div className="mobile-control-wrapper">
        {player === 'p1' && (
          <div
            className="game-id-interstitial"
            style={{ display: showGameCode }}
          >
            {gameId}
            <button onClick={() => setShowGameCode('none')}>
              <img
                src={'../../assets/icons/closeSolid.svg'}
                alt="close"
                style={{ width: '4em' }}
              />
            </button>
          </div>
        )}
        <div
          className="stop-start-player-status"
          style={gameStatus.activePlayer === player ? green : red}
        />
        <div className="game-id-static">{gameId}</div>
        <button
          onClick={() => {
            gameStatus.activePlayer === player
              ? dispatch(skipPlayer(player, gameId))
              : null;
          }}
          style={{
            position: 'fixed',
            backgroundColor: 'unset',
            border: '0',
            padding: '0',
            right: '1.3em',
          }}
        >
          <img
            src={'../../assets/icons/skip.svg'}
            alt="skip"
            style={{ width: '3em' }}
          />
        </button>

        {/* 
          TODO add valid element
          <DropZoneContainer
            fichasInPlay={fichasInPlay}
            dispatch={dispatch}
            isActivePlayer={gameStatus.activePlayer === player}
          /> */}

        <div className="mobile-control-fichas-deck">
          {Object.values(fichas).map((ficha: IFicha, i: number) => (
            <FichaTouchBundler
              ficha={ficha}
              gameId={gameId}
              player={player}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
};

const mapToStateProps = (state: any, props: any) => {
  if (!props.location.state) {
    return state;
  } else {
    return {
      fichasInPlay: state.fichasInPlay,
      fichas: state.players[props.location.state.player],
      gameStatus: state.gameStatus,
      gameId: props.location.state.gameId,
      player: props.location.state.player,
    };
  }
};

FichaTouchBundler.propTypes = {
  ficha: PropTypes.object,
  player: PropTypes.string,
  gameId: PropTypes.string,
};

MobileControl.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

export default withRouter(
  connect(mapToStateProps)(MobileControl)
  // DndContext(TouchBackend)(connect(mapToStateProps)(MobileControl))
);
