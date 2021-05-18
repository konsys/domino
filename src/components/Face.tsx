import React from 'react';
import PropTypes from 'prop-types';
import { STYLES } from '../assets/styling';
import { calcDots } from '../helpers/calcDots';

function Face(props) {
  let i = 0;
  const dotPattern = calcDots(props.value);

  return (
    <div className="face" style={STYLES.activePlayersHand.face}>
      <div
        className={dotPattern[i++]}
        style={{ ...STYLES.activePlayersHand.dot, gridColumnStart: '1' }}
      >
        &nbsp;
      </div>
      <div
        className={dotPattern[i++]}
        style={{ ...STYLES.activePlayersHand.dot, gridColumnStart: '2' }}
      >
        &nbsp;
      </div>
      <div
        className={dotPattern[i++]}
        style={{ ...STYLES.activePlayersHand.dot, gridColumnStart: '3' }}
      >
        &nbsp;
      </div>
      <div
        className={dotPattern[i++]}
        style={{ ...STYLES.activePlayersHand.dot, gridColumnStart: '1' }}
      >
        &nbsp;
      </div>
      <div
        className={dotPattern[i++]}
        style={{ ...STYLES.activePlayersHand.dot, gridColumnStart: '2' }}
      >
        &nbsp;
      </div>
      <div
        className={dotPattern[i++]}
        style={{ ...STYLES.activePlayersHand.dot, gridColumnStart: '3' }}
      >
        &nbsp;
      </div>
      <div
        className={dotPattern[i++]}
        style={{ ...STYLES.activePlayersHand.dot, gridColumnStart: '1' }}
      >
        &nbsp;
      </div>
      <div
        className={dotPattern[i++]}
        style={{ ...STYLES.activePlayersHand.dot, gridColumnStart: '2' }}
      >
        &nbsp;
      </div>
      <div
        className={dotPattern[i++]}
        style={{ ...STYLES.activePlayersHand.dot, gridColumnStart: '3' }}
      >
        &nbsp;
      </div>
    </div>
  );
}

Face.propTypes = {
  value: PropTypes.number.isRequired
};

export default Face;
