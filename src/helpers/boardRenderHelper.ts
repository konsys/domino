import c from '../constants';
import { IFicha } from './gameTypes';

function boardRenderHelper(fichas: IFicha[]) {
  const { fichasGrid } = c;
  const fichasArrangement = Array(fichasGrid.length).fill(null);

  Object.values(fichas).forEach((ficha: IFicha) => {
    fichasGrid.forEach((gridId, i) => {
      if (ficha.renderPos === gridId) {
        fichasArrangement[i] = ficha;
      }
    });
  });
  return fichasArrangement;
}

export function boardRenderHelperDisplay(fichas: IFicha[]) {
  const { fichasGridDisplay } = c;
  const fichasArrangement = Array(fichasGridDisplay.length).fill(null);

  Object.values(fichas).forEach((ficha: IFicha) => {
    fichasGridDisplay.forEach((gridId, i) => {
      if (ficha.renderPos === gridId) {
        fichasArrangement[i] = ficha;
      }
    });
  });
  return fichasArrangement;
}

export default boardRenderHelper;
