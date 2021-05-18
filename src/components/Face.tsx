import React from 'react';
import { STYLES } from '../assets/styling';
import { calcDots } from '../helpers/calcDots';

function Face(props: { value: number }) {
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

export default Face;
