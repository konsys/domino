import * as types from '../constants/actionTypes';

const fichasInPlay = (state = {}, action) => {
  switch (action.type) {
    case types.REFRESH_BOARD:
      return action.fichas;
    default:
      return state;
  }
};

export default fichasInPlay;
