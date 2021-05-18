import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { watchGame, watchBoard } from '../../actions';
import { PlayBoard } from './DisplayBoardOnly';

const Display = (props: any) => {
  useEffect(() => {
    if (props.location.state) {
      const { gameId } = props.location.state;

      props.dispatch(watchGame(gameId));
      props.dispatch(watchBoard(gameId));
    }
  }, []);

  return props.location.state ? (
    <PlayBoard
      fichas={props.fichasInPlay}
      gameId={props.gameId}
      gameStatus={props.gameStatus}
    />
  ) : (
    <Redirect to="/" />
  );
};

const mapToStateProps = (state: any, props: any) => {
  if (!props.location.state) {
    return state;
  } else {
    return {
      fichasInPlay: state.fichasInPlay,
      gameStatus: state.gameStatus,
      gameId: props.location.state.gameId,
    };
  }
};

export default connect(mapToStateProps)(Display);
