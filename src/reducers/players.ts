import * as types from '../constants/actionTypes';

const players = (state = { p1: {}, p2: {} }, action) => {
  switch (action.type) {
    case types.REFRESH_FICHAS:
      return { [action.player]: action.fichas };

    default:
      return state;
  }
};

export default players;
