import React from 'react';
import PropTypes from 'prop-types';
import Face from '../Face';
import { STYLES } from '../../assets/styling';
import { STYLES as TRANSFORM } from './styling';
import '../../styles/ficha.css';

function FichaDisplay({ value, fichaStyling }) {
  return (
    <div
      style={{
        ...STYLES.activePlayersHand.ficha,
        ...TRANSFORM.fichaStyling[fichaStyling]
      }}
    >
      <Face value={value[0]} />
      <hr style={STYLES.activePlayersHand.line} />
      <Face value={value[1]} />
    </div>
  );
}

FichaDisplay.propTypes = {
  value: PropTypes.array.isRequired,
  fichaStyling: PropTypes.string,
  transform: PropTypes.object
};

export default FichaDisplay;
