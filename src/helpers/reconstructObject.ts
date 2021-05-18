import { IFicha } from './gameTypes';

export const reconstructObject = (inputArray: any) => {
  const outputObject: any = {};
  inputArray.forEach((ficha: IFicha) => {
    outputObject[ficha.fichaId] = ficha;
  });
  return outputObject;
};
