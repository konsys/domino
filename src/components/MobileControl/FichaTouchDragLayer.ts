import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import FichaDisplay from './FichaDisplay';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

const getItemStyles = props => {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }
  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
};

const FichaDragLayer = props => {
  const { item, isDragging } = props;

  if (!isDragging) {
    return null;
  }
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(props)}>
        <FichaDisplay value={item.value} fichaStyling={item.fichaStyling} />
      </div>
    </div>
  );
};

const collect = monitor => {
  return {
    item: monitor.getItem(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
};

FichaDragLayer.propTypes = {
  item: PropTypes.object,
  isDragging: PropTypes.bool
};

export default DragLayer(collect)(FichaDragLayer);
