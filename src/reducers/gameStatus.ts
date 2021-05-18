import * as types from '../constants/actionTypes';

const gameStatus = (state = { activePlayer: 'p1' }, action: any) => {
  switch (action.type) {
    case types.UPDATE_GAME_STATUS:
      return { activePlayer: action.data };

    case types.TOGGLE_TURN:
      return state;

    default:
      return state;
  }
};

export default gameStatus;
