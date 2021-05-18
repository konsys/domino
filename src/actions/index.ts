import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

import c from '../constants';
import { v4 } from 'uuid';
import { matchLeft, matchRight } from '../helpers/matchers';
import { reconstructObject } from '../helpers/reconstructObject';
import { fichaRenderHelper } from '../helpers/fichaRenderHelper';

const { firebaseConf, types, gameStart } = c;

firebase.initializeApp(firebaseConf);

export const watchHand = (gameId: any, player: any) => {
  return (dispatch: any) => {
    firebase
      .database()
      .ref(`${gameId}/player/${player}`)
      .on('child_removed', () => {
        dispatch(getPlayersFichasFromDb(player, gameId));
      });
  };
};

export const watchBoard = (gameId: any) => {
  return (dispatch: any) => {
    firebase
      .database()
      .ref(`${gameId}/board`)
      .on('child_added', () => {
        dispatch(getFichasInPlayFromDb(gameId));
      });
  };
};

export const watchGame = (gameId: any) => {
  return (dispatch: any) => {
    firebase
      .database()
      .ref(`${gameId}/gameStatus`)
      .on('child_changed', (data) => {
        typeof data.val() === 'string'
          ? dispatch(getUpdatedGameState(data.val(), gameId))
          : null;
      });
  };
};

export const startGame = (gameId: any, mode = 'classic') => {
  const uplayedFichas = gameStart();
  const readySet: any = {};

  uplayedFichas.forEach((ficha) => {
    const fichaId = v4();
    readySet[fichaId] = { value: ficha, fichaId };
  });
  return () => {
    firebase
      .database()
      .ref(gameId)
      .set({
        uplayedFichas: readySet,
        gameStatus: {
          startTime: new Date(),
          activePlayer: 'p1',
          firstMoveMade: false,
          mode,
        },
      });
  };
};

export const grabFichas = (gameId: any, player: any) => {
  return (dispatch: any) => {
    firebase
      .database()
      .ref(`${gameId}/uplayedFichas`)
      .once('value')
      .then((data) => {
        dispatch(readyPlayer(gameId, player, data.val()));
      });
  };
};

export const makeMove = (ficha: any, target: any) => {
  const { player, gameId } = ficha;

  const game = firebase.database().ref(gameId);
  const gameStatus = game.child('gameStatus');
  const board = game.child('board');

  return (dispatch: any, state: any) => {
    const { fichasInPlay } = state();

    gameStatus.once('value').then((gameStatusData) => {
      const { activePlayer, firstMoveMade } = gameStatusData.val();

      if (!firstMoveMade && player === activePlayer) {
        dispatch(commitMove(ficha, 0, board, gameStatus, player));
      } else if (fichasInPlay && player === activePlayer) {
        let canMove = moveInsights(fichasInPlay, target);
        let rightMatch, leftMatch;

        if (canMove) {
          const { side, position } = canMove;

          switch (side) {
            case 'right':
              rightMatch = matchRight(fichasInPlay, { ...ficha, position });
              rightMatch === 'flip'
                ? (ficha.value = [ficha.value[1], ficha.value[0]])
                : null;
              rightMatch &&
                dispatch(
                  commitMove(ficha, position, board, gameStatus, player)
                );

              break;
            case 'left':
              leftMatch = matchLeft(fichasInPlay, { ...ficha, position });
              leftMatch === 'flip'
                ? (ficha.value = [ficha.value[1], ficha.value[0]])
                : null;
              leftMatch &&
                dispatch(
                  commitMove(ficha, position, board, gameStatus, player)
                );
              break;
          }
        }
      }
    });
  };
};

export const skipPlayer = (player: any, gameId: any) => {
  return () => {
    firebase
      .database()
      .ref(`${gameId}/gameStatus/`)
      .update({ activePlayer: player == 'p2' ? 'p1' : 'p2' });
  };
};

const readyPlayer = (gameId: any, player: any, uplayedFichas: any) => {
  const pullAt = require('lodash.pullat');
  let deckArray: any = [];

  Object.keys(uplayedFichas).map((ficha) =>
    deckArray.push(uplayedFichas[ficha])
  );
  const playersFichas = pullAt(deckArray, [...Array.from(Array(10).keys())]);

  return (dispatch: any) => {
    dispatch(updateUnplayedFichas(gameId, reconstructObject(deckArray)));
    dispatch(
      addFichasToPlayerDb(gameId, player, reconstructObject(playersFichas))
    );
    dispatch(
      refreshPlayersFichas(gameId, player, reconstructObject(playersFichas))
    );
  };
};

const updateUnplayedFichas = (gameId: any, fichas: any) => {
  return () => {
    firebase.database().ref(`${gameId}/uplayedFichas`).set(fichas);
  };
};

const addFichasToPlayerDb = (gameId: any, player: any, fichas: any) => {
  const userAgent = navigator.userAgent ? navigator.userAgent : null;

  let playerGame: any = {};
  playerGame[player] = fichas;
  playerGame[`_userAgents/${player}`] = userAgent;

  return () => {
    firebase.database().ref(`${gameId}/player`).update(playerGame);
  };
};

const placeFichaOnBoard = (ficha: any, board: any) => {
  return () => {
    board.push({ ...ficha, top: ficha.value[0], bottom: ficha.value[1] });
  };
};

const getFichasInPlayFromDb = (gameId: any) => {
  return (dispatch: any) => {
    firebase
      .database()
      .ref(`${gameId}/board`)
      .once('value')
      .then((data) => {
        dispatch(refreshBoardFichas(gameId, data.val()));
      });
  };
};

const getPlayersFichasFromDb = (player: any, gameId: any) => {
  return (dispatch: any) => {
    firebase
      .database()
      .ref(`${gameId}/player/${player}`)
      .once('value')
      .then((data) => {
        dispatch(refreshPlayersFichas(gameId, player, data.val()));
      });
  };
};

const moveInsights = (fichasInPlay: any, target: any) => {
  const layout = Object.values(fichasInPlay)
    .map((ficha: any) => ficha.renderPos)
    .sort((a, b) => a - b);

  if (target < layout[0] && target < layout[layout.length - 1]) {
    return { side: 'left', position: layout[0] - 1 };
  } else if (target > layout[0] && target > layout[layout.length - 1]) {
    return { side: 'right', position: layout[layout.length - 1] + 1 };
  } else if (!layout.includes(target)) {
    return false;
  }
};

const commitMove = (
  ficha: any,
  toPosition: any,
  board: any,
  gameStatus: any,
  player: any
) => {
  return (dispatch: any) => {
    dispatch(removeFichaFromPlayer(ficha));
    dispatch(
      placeFichaOnBoard(
        {
          ...ficha,
          renderPos: toPosition,
          fichaStyling: fichaRenderHelper(toPosition),
        },
        board
      )
    );
    dispatch(nextPlayer(gameStatus, player));
  };
};

const nextPlayer = (gameStatus: any, player: any) => {
  return () => {
    gameStatus.update({
      activePlayer: player == 'p2' ? 'p1' : 'p2',
      firstMoveMade: true,
    });
  };
};

const removeFichaFromPlayer = ({ fichaId, player, gameId }: any) => {
  return () => {
    firebase.database().ref(`${gameId}/player/${player}/${fichaId}`).remove();
  };
};

const refreshBoardFichas = (gameId: any, fichas: any) => ({
  type: types.REFRESH_BOARD,
  gameId,
  fichas,
});

const refreshPlayersFichas = (gameId: any, player: any, fichas: any) => ({
  type: types.REFRESH_FICHAS,
  gameId,
  player,
  fichas,
});

const getUpdatedGameState = (data: any, gameId: any) => ({
  type: types.UPDATE_GAME_STATUS,
  gameId,
  data,
});
