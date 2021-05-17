import React from 'react';
import PropTypes from 'prop-types';
import { STYLES } from '../assets/styling';

function Player(props) {
  const { name, isComputer, isActive } = props;
  const icon = isComputer ? '🤖' : '🧔🏻';

  const inactiveName = {
    color: '#00000080',
    fontStyle: 'italic',
    margin: 0
  };

  const activeName = {
    fontWeight: 700,
    margin: 0
  };

  return (
    <div style={STYLES.player} className="player">
      <p
        style={{
          ...STYLES.player.face,
          color: isActive ? '' : 'rgba(255,255,255,.5)'
        }}
      >
        {icon}
      </p>
      <p style={isActive ? activeName : inactiveName}>{name}</p>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isComputer: PropTypes.bool
};

export default Player;
