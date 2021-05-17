import React from 'react';
import PropTypes from 'prop-types';
import Face from './Face';
import { STYLES } from '../assets/styling';
import '../styles/ficha.css';

function handleDrag(event, ficha) {
  event.dataTransfer.setData('ficha', JSON.stringify(ficha));
}

function Ficha(props) {
  const { value, fichaId, player, gameId, fichaStyling } = props;
  return (
    <div
      draggable
      onDragStart={event =>
        handleDrag(event, { fichaId, player, value, gameId })
      }
      style={{
        ...STYLES.activePlayersHand.ficha,
        ...STYLES.fichaStyling[fichaStyling]
      }}
    >
      <Face value={value[0]} />
      <hr style={STYLES.activePlayersHand.line} />
      <Face value={value[1]} />
    </div>
  );
}

Ficha.propTypes = {
  value: PropTypes.array.isRequired,
  fichaId: PropTypes.string.isRequired,
  player: PropTypes.string,
  gameId: PropTypes.string,
  renderPos: PropTypes.number,
  fichaStyling: PropTypes.string
};

export default Ficha;
