import React from 'react';
import PropTypes from 'prop-types';
import FichaDisplay from './FichaDisplayBoard';
import { boardRenderHelperDisplay } from '../../helpers/boardRenderHelper';
import { fichaRenderHelperDisplay } from '../../helpers/fichaRenderHelper';
import { BOARD_STYLES } from './styling';
import c from '../../constants';

export const PlayBoard = ({ fichas, gameStatus, gameId }: any) => {
  const { activePlayer } = gameStatus;
  const { fichasGridDisplay } = c;

  const renderedOutput = Object.keys(fichas).length
    ? boardRenderHelperDisplay(fichas)
    : Array(40).fill(null);

  return (
    <div style={BOARD_STYLES.board} className="board">
      <div style={BOARD_STYLES.playable}>
        {renderedOutput.map((ficha, i) =>
          ficha ? (
            <div
              key={i}
              id={fichasGridDisplay[i]?.toString()}
              className="path"
              style={BOARD_STYLES.path}
            >
              <FichaDisplay
                value={ficha.value}
                fichaStyling={fichaRenderHelperDisplay(ficha.renderPos)}
              />
            </div>
          ) : (
            <div
              key={i}
              id={fichasGridDisplay[i]?.toString()}
              className={fichasGridDisplay[i] ? 'path' : undefined}
            >
              &nbsp;
            </div>
          )
        )}
      </div>
      <div style={BOARD_STYLES.status} className="status">
        <div style={BOARD_STYLES.playerInfo}>
          {activePlayer === 'p1' && (
            <img
              src={require('../../assets/icons/domino.svg').default}
              alt="ficha"
              style={BOARD_STYLES.icon}
            />
          )}
          p1
        </div>
        <div style={BOARD_STYLES.playerInfo}>
          {activePlayer === 'p2' && (
            <img
              src={require('../../assets/icons/domino.svg').default}
              alt="ficha"
              style={{
                ...BOARD_STYLES.icon,
                top: '0.33rem',
                left: '8.75rem',
              }}
            />
          )}
          p2
        </div>

        <div style={BOARD_STYLES.gameInfo}>{gameId}</div>
      </div>
    </div>
  );
};

PlayBoard.propTypes = {
  gameId: PropTypes.string.isRequired,
  fichas: PropTypes.object,
  gameStatus: PropTypes.object,
};
