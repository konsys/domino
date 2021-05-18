import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import { STYLES } from '../assets/styling';
import { connect } from 'react-redux';

function PlayerStatus(props: any) {
  const { status, gameId } = props;

  return (
    <div>
      <p
        style={{
          margin: '.3em',
          fontFamily: 'monospace',
          textAlign: 'center',
          fontSize: '.8em',
          color: 'rgb(64, 78, 67)',
        }}
      >
        {gameId}
      </p>
      <div style={STYLES.status.box}>
        <div className="status" style={STYLES.status}>
          <Player
            name={'player1'}
            isComputer={false}
            isActive={status.activePlayer === 'p1' ? true : false}
          />
          <Player
            name={'player2'}
            isComputer={true}
            isActive={status.activePlayer === 'p2' ? true : false}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { status: state.gameStatus };
};

PlayerStatus.propTypes = {
  dispatch: PropTypes.func.isRequired,
  gameId: PropTypes.string.isRequired,
  status: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(PlayerStatus);
