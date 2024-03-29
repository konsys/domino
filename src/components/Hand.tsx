import React from 'react';
import Ficha from './Ficha';

import { watchHand, watchGame, skipPlayer } from '../actions';

import { STYLES } from '../assets/styling';
import { connect } from 'react-redux';
import { IFicha, IGameStatus } from 'helpers/gameTypes';

class Hand extends React.Component<IGameStatus, any> {
  constructor(props: any) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.props.dispatch(watchHand(this.props.gameId, this.props.player));
    this.props.dispatch(watchGame(this.props.gameId));
  }

  render() {
    const { fichas, player, gameId, dispatch, gameStatus } = this.props;
    const icon = player === 'p2' ? '🤖' : '🧔🏻';

    return (
      <div style={STYLES.activePlayersHand} className="activePlayersHand">
        <div
          style={{
            display: 'inline-block',
            position: 'fixed',
            bottom: '0px',
            left: '0px',
            textAlign: 'center',
            padding: '.5em',
          }}
        >
          <p style={{ margin: 0, fontSize: '2em' }}>{icon}</p>
          <p style={{ margin: 0, fontFamily: 'monospace' }}>
            {player == 'p2' ? 'player2' : 'player1'}
          </p>
        </div>
        <div style={STYLES.activePlayersHand.fichas}>
          {Object.values(fichas).map((ficha: IFicha) => (
            <Ficha
              fichaStyling={'fichaInHand'}
              value={ficha.value}
              fichaId={ficha.fichaId}
              key={ficha.fichaId}
              player={player}
              gameId={gameId}
            />
          ))}
        </div>
        <div style={{ right: '10px', position: 'fixed', bottom: '10px' }}>
          <button
            style={{ ...STYLES.gameSelect.button, margin: 0 }}
            onClick={() => {
              gameStatus.activePlayer === player
                ? dispatch(skipPlayer(player, gameId))
                : null;
            }}
          >
            Skip turn
          </button>
        </div>
      </div>
    );
  }
}

const propsFromState = (state: any, props: any) => {
  return { fichas: state.players[props.player], gameStatus: state.gameStatus };
};

export default connect(propsFromState)(Hand);
