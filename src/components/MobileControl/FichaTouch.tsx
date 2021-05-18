import React from 'react';
import PropTypes from 'prop-types';
import Face from '../Face';
import { STYLES } from '../../assets/styling';
import { ItemTypes } from '../../constants/itemTypes';
import { DragSource } from 'react-dnd';
import '../../styles/ficha.css';

const fichaSource = {
  beginDrag(props: any) {
    return props;
  },
  endDrag(props: any) {
    return props;
  },
};

function collect(connect: any, monitor: any) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

function FichaTouch(props: any) {
  const { value, fichaStyling, isDragging, connectDragSource } = props;

  return connectDragSource(
    <div
      style={{
        ...STYLES.activePlayersHand.ficha,
        ...STYLES.fichaStyling[fichaStyling],
        bottom: 0,
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
      }}
    >
      <Face value={value[0]} />
      <hr style={STYLES.activePlayersHand.line} />
      <Face value={value[1]} />
    </div>
  );
}

FichaTouch.propTypes = {
  value: PropTypes.array.isRequired,
  fichaStyling: PropTypes.string,
};

export default DragSource(ItemTypes.FICHA, fichaSource, collect)(FichaTouch);
