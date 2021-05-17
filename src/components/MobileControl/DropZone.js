import React from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../constants/itemTypes';
import { makeMove } from '../../actions';

const dropZoneTarget = {
  drop(props, monitor) {
    const direction = props.side === 'left' ? -99 : 99;
    props.dispatch(
      makeMove({ ...monitor.getItem(), writable: true }, direction)
    );
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    drop: monitor.getItem(),
    isOver: monitor.isOver()
  };
}

const DropZone = ({
  side,
  connectDropTarget,
  children,
  dropStyling,
  isOver
}) => {
  return connectDropTarget(
    <div
      id={side}
      className={dropStyling}
      style={
        isOver ? { backgroundColor: '#add1ad' } : { backgroundColor: 'unset' }
      }
    >
      {children}
    </div>
  );
};

export default DropTarget(ItemTypes.FICHA, dropZoneTarget, collect)(DropZone);
