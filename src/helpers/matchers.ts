export const getLeftMostFicha = fichaSet => {
  return Object.values(fichaSet).sort((a, b) => a.renderPos - b.renderPos)[0];
};

export const getRightMostFicha = fichaSet => {
  return Object.values(fichaSet).sort((a, b) => b.renderPos - a.renderPos)[0];
};

export const matchLeft = (presentBoard, ficha) => {
  const leftMost = getLeftMostFicha(presentBoard);
  if (ficha.value.indexOf(leftMost.top) == 0) {
    return 'flip';
  }
  return (
    ficha.value.includes(leftMost.top) &&
    leftMost.renderPos - 1 == ficha.position
  );
};

export const matchRight = (presentBoard, ficha) => {
  const rightMost = getRightMostFicha(presentBoard);
  if (ficha.value.indexOf(rightMost.bottom) == 1) {
    return 'flip';
  }
  return (
    ficha.value.includes(rightMost.bottom) &&
    rightMost.renderPos + 1 == ficha.position
  );
};
