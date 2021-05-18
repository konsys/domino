export const fichaRenderHelper = pos => {
  const fichaStyling = [
    'fichaOnBoardLeft',
    'fichaOnBoardRight',
    'fichaOnBoardMinus90',
    'fichaOnBoardPlus90'
  ];
  if ((pos >= -12 && pos <= -5) || pos >= 6) {
    return fichaStyling[3];
  } else if (pos >= -3 && pos <= 4) {
    return fichaStyling[2];
  } else if (pos == 5) {
    return fichaStyling[1];
  } else if (pos == -4) {
    return fichaStyling[0];
  }
};

export const fichaRenderHelperDisplay = pos => {
  const fichaStyling = [
    'fichaDisplayLeft',
    'fichaDisplayRight',
    'fichaDisplayMinus90',
    'fichaDisplayPlus90'
  ];
  if ((pos >= -11 && pos <= -5) || (pos >= 5 && pos <= 11)) {
    return fichaStyling[3];
  } else if (
    (pos >= -19 && pos <= -13) ||
    (pos >= -3 && pos <= 3) ||
    (pos >= 13 && pos <= 19)
  ) {
    return fichaStyling[2];
  } else if (pos == -12 || pos == 4 || pos == 19) {
    //right
    return fichaStyling[1];
  } else if (pos == -4 || pos == 12) {
    //left
    return fichaStyling[0];
  }
};
