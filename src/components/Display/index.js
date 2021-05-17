import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { watchGame, watchBoard } from '../../actions';
import DisplayBoardOnly from './DisplayBoardOnly';

const Display = props => {
  useEffect(() => {
    if (props.location.state) {
      const { gameId } = props.location.state;

      props.dispatch(watchGame(gameId));
      props.dispatch(watchBoard(gameId));
    }
  }, []);

  if (props.location.state) {
    return (
      <DisplayBoardOnly
        fichas={props.fichasInPlay}
        gameId={props.gameId}
        gameStatus={props.gameStatus}
      />
    );
  } else {
    return <Redirect to="/" />;
  }
};

const mapToStateProps = (state, props) => {
  if (!props.location.state) {
    return state;
  } else {
    return {
      fichasInPlay: state.fichasInPlay,
      gameStatus: state.gameStatus,
      gameId: props.location.state.gameId
    };
  }
};

export default connect(mapToStateProps)(Display);
