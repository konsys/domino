import { IFicha } from './gameTypes';

export const getLeftMostFicha = (fichaSet: any): any => {
  return Object.values(fichaSet).sort(
    (a: any, b: any) => a.renderPos - b.renderPos
  )[0];
};

export const getRightMostFicha = (fichaSet: any): any => {
  return Object.values(fichaSet).sort(
    (a: any, b: any) => b.renderPos - a.renderPos
  )[0];
};

export const matchLeft = (presentBoard: any, ficha: IFicha) => {
  const leftMost = getLeftMostFicha(presentBoard);
  if (ficha.value.indexOf(leftMost.top) === 0) {
    return 'flip';
  }
  return (
    ficha.value.includes(leftMost.top) &&
    leftMost.renderPos - 1 === ficha.position
  );
};

export const matchRight = (presentBoard: any, ficha: IFicha) => {
  const rightMost = getRightMostFicha(presentBoard);
  if (ficha.value.indexOf(rightMost.bottom) === 1) {
    return 'flip';
  }
  return (
    ficha.value.includes(rightMost.bottom) &&
    rightMost.renderPos + 1 === ficha.position
  );
};
