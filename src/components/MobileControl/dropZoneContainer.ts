import React from 'react';
import DropZone from './dropZone';
import PropTypes from 'prop-types';
import FichaDisplay from './FichaDisplay';

import { getLeftMostFicha, getRightMostFicha } from '../../helpers/matchers';
import SpinningFicha from '../../assets/SpinningFicha';
import Overlay from './Overlay';

const DropZoneContainer = ({ dispatch, fichasInPlay, isActivePlayer }) => {
  let leftMost, rightMost, only;

  if (!Object.keys(fichasInPlay).length) {
    return (
      <div className="drop-zone-container-wrapper">
        {isActivePlayer ? (
          <div>
            <DropZone
              dispatch={dispatch}
              side={'left'}
              dropStyling={'dropzone'}
            >
              <SpinningFicha />
            </DropZone>
            <p>Place your ficha</p>
          </div>
        ) : (
          <div>
            <div className="dragzone-container-waiting">
              <SpinningFicha />
            </div>

            <p>Waiting on player 1</p>
          </div>
        )}
      </div>
    );
  } else if (Object.keys(fichasInPlay).length === 1) {
    only = getLeftMostFicha(fichasInPlay);

    return (
      <div className="drop-zone-container-wrapper">
        <div className="drop-zone-container-with-fichas">
          <DropZone
            dispatch={dispatch}
            side="left"
            dropStyling={'dropzone dropzone-left'}
          />
          <Overlay>
            <FichaDisplay fichaStyling={'dropZoneView'} value={only.value} />
          </Overlay>
          <DropZone
            dispatch={dispatch}
            side="right"
            dropStyling={'dropzone dropzone-right'}
          />
        </div>
      </div>
    );
  } else if (Object.keys(fichasInPlay).length > 1) {
    leftMost = getLeftMostFicha(fichasInPlay);
    rightMost = getRightMostFicha(fichasInPlay);

    return (
      <div className="drop-zone-container-wrapper">
        <div className="drop-zone-container-with-fichas">
          <DropZone
            dispatch={dispatch}
            side="left"
            dropStyling={'dropzone dropzone-left'}
          />
          <Overlay placement={'left'}>
            <FichaDisplay
              fichaStyling={'dropZoneView'}
              value={leftMost.value}
            />
          </Overlay>
          <Overlay placement={'right'}>
            <FichaDisplay
              fichaStyling={'dropZoneView'}
              value={rightMost.value}
            />
          </Overlay>
          <DropZone
            dispatch={dispatch}
            side="right"
            dropStyling={'dropzone dropzone-right'}
          />
        </div>
      </div>
    );
  }
};

DropZoneContainer.propTypes = {
  dispatch: PropTypes.func,
  fichasInPlay: PropTypes.object
};

export default DropZoneContainer;
