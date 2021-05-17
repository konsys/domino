import React from 'react';
import PropTypes from 'prop-types';
import FichaDisplay from './FichaDisplayBoard';
import { boardRenderHelperDisplay } from '../../helpers/boardRenderHelper';
import { fichaRenderHelperDisplay } from '../../helpers/fichaRenderHelper';
import { STYLES } from './styling';
import c from '../../constants';
import domino from '../../assets/icons/domino.svg';

const PlayBoard = ({ fichas, gameStatus, gameId }) => {
  const { activePlayer } = gameStatus;
  const { fichasGridDisplay } = c;

  const renderedOutput = Object.keys(fichas).length
    ? boardRenderHelperDisplay(fichas)
    : Array(40).fill(null);

  return (
    <div style={STYLES.board} className="board">
      <div style={STYLES.board.playable}>
        {renderedOutput.map((ficha, i) =>
          ficha ? (
            <div
              key={i}
              id={fichasGridDisplay[i]}
              className="path"
              style={STYLES.board.path}
            >
              <FichaDisplay
                value={ficha.value}
                fichaStyling={fichaRenderHelperDisplay(ficha.renderPos)}
              />
            </div>
          ) : (
            <div
              key={i}
              id={fichasGridDisplay[i]}
              className={fichasGridDisplay[i] ? 'path' : null}
            >
              &nbsp;
            </div>
          )
        )}
      </div>
      <div style={STYLES.board.status} className="status">
        <div style={STYLES.board.status.playerInfo}>
          {activePlayer === 'p1' && (
            <img src={domino} alt="ficha" style={STYLES.board.status.icon} />
          )}
          p1
        </div>
        <div style={STYLES.board.status.playerInfo}>
          {activePlayer === 'p2' && (
            <img
              src={domino}
              alt="ficha"
              style={{
                ...STYLES.board.status.icon,
                top: '0.33rem',
                left: '8.75rem'
              }}
            />
          )}
          p2
        </div>

        <div style={STYLES.board.status.gameInfo}>{gameId}</div>
      </div>
    </div>
  );
};

PlayBoard.propTypes = {
  gameId: PropTypes.string.isRequired,
  fichas: PropTypes.object,
  gameStatus: PropTypes.object
};

export default PlayBoard;
