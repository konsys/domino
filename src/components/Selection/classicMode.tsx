import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ClassicMode = () => {
  return (
    <div className="selection-option-classic">
      <div>
        <img
          src={require('../../assets/img/classic-mode.png').default}
          className="imac"
          alt="classid gameplay mode"
        />
        <Link to="/classic">
          <button className="selection-button">Classic</button>
        </Link>
        <p className="selection-info-p">
          The original 2-player game. Only playable on a desktop computer.
        </p>
      </div>
    </div>
  );
};

ClassicMode.propTypes = {
  handleInfoVis: PropTypes.func,
};

export default ClassicMode;
