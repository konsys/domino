import React from 'react';
import Face from './Face';
import { STYLES } from '../assets/styling';
import '../styles/ficha.css';

function handleDrag(event: any, ficha: any) {
  event.dataTransfer.setData('ficha', JSON.stringify(ficha));
}

interface IProps {
  values: string[];
  fichaId: number;
  player: string;
  gameId: string;
  fichaStyling: string;
  renderPos: number;
}
function Ficha(props: IProps) {
  const { values, fichaId, player, gameId, fichaStyling } = props;
  return (
    <div
      draggable
      onDragStart={(event) =>
        handleDrag(event, { fichaId, player, values, gameId })
      }
      style={{
        ...STYLES.activePlayersHand.ficha,
        ...STYLES.fichaStyling[fichaStyling],
      }}
    >
      <Face value={values[0]} />
      <hr style={STYLES.activePlayersHand.line} />
      <Face value={values[1]} />
    </div>
  );
}

export default Ficha;
